/**
 * HTML to Markdown Converter for Construct 3 Manual
 * Usage: node html-to-md.js <input.json> <output-dir>
 */

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.construct.net';
const MANUAL_BASE = '/en/make-games/manuals/construct-3';

/**
 * Convert DOM node to Markdown
 */
function nodeToMarkdown(node, listDepth = 0) {
  if (node.nodeType === 3) { // Text node
    // Clean up excessive whitespace but preserve single spaces
    return node.textContent.replace(/\s+/g, ' ');
  }
  if (node.nodeType !== 1) return ''; // Not element node

  const tag = node.tagName.toLowerCase();

  // Skip anchor links
  if (tag === 'a' && node.classList.contains('internalNavLink')) {
    return '';
  }

  // Handle ilTag: Paid plans only
  if (tag === 'span' && node.classList.contains('ilTag')) {
    return ` \`[${node.textContent.trim()}]\` `;
  }

  // Handle navWrap: Tools ► View
  if (tag === 'span' && node.classList.contains('navWrap')) {
    const text = node.textContent.replace(/►/g, ' › ').trim();
    return `\`${text}\``;
  }

  // Handle arrow
  if (tag === 'span' && node.classList.contains('arr')) {
    return ' › ';
  }

  // Process children helper
  const processChildren = (depth = listDepth) => {
    return Array.from(node.childNodes)
      .map(child => nodeToMarkdown(child, depth))
      .join('');
  };

  switch (tag) {
    case 'h1':
      return `# ${node.textContent.trim()}\n\n`;
    case 'h2':
      return `## ${node.textContent.trim()}\n\n`;
    case 'h3':
      return `### ${node.textContent.trim()}\n\n`;
    case 'h4':
      return `#### ${node.textContent.trim()}\n\n`;
    case 'h5':
      return `##### ${node.textContent.trim()}\n\n`;
    case 'h6':
      return `###### ${node.textContent.trim()}\n\n`;

    case 'p':
      return processChildren() + '\n\n';

    case 'br':
      return '\n';

    case 'strong':
    case 'b':
      return `**${processChildren()}**`;

    case 'em':
    case 'i':
      return `*${processChildren()}*`;

    case 'kbd':
      return `<kbd>${node.textContent}</kbd>`;

    case 'code':
      if (node.parentElement && node.parentElement.tagName === 'PRE') {
        return node.textContent;
      }
      return `\`${node.textContent}\``;

    case 'pre': {
      const codeEl = node.querySelector('code');
      const lang = codeEl?.className?.match(/language-(\w+)/)?.[1] || '';
      const content = codeEl ? codeEl.textContent : node.textContent;
      return `\`\`\`${lang}\n${content.trim()}\n\`\`\`\n\n`;
    }

    case 'a': {
      let href = node.getAttribute('href') || '';
      const text = processChildren().trim();
      if (!text) return '';
      if (href.startsWith('/')) {
        href = BASE_URL + href;
      }
      if (href.startsWith('#')) {
        return text; // Internal anchor, just keep text
      }
      return `[${text}](${href})`;
    }

    case 'img': {
      let src = node.getAttribute('src') || '';
      if (src.startsWith('/')) {
        src = BASE_URL + src;
      }
      const alt = node.getAttribute('alt') || '';
      return `\n\n![${alt}](${src})\n\n`;
    }

    case 'figure':
    case 'div': {
      // Handle image containers with captions
      if (node.classList.contains('imgAlign') || node.classList.contains('imageWrapper')) {
        const img = node.querySelector('img');
        const descrip = node.querySelector('.descrip');
        if (img) {
          let src = img.getAttribute('src') || '';
          if (src.startsWith('/')) src = BASE_URL + src;
          // Prefer original image link
          const originalLink = node.querySelector('a[href*="construct-static.com"]');
          if (originalLink) {
            src = originalLink.getAttribute('href');
          }
          const alt = img.getAttribute('alt') || '';
          const caption = descrip ? descrip.textContent.trim() : alt;
          if (caption && caption !== alt) {
            return `\n\n![${alt}](${src})\n*${caption}*\n\n`;
          }
          return `\n\n![${alt}](${src})\n\n`;
        }
      }
      return processChildren();
    }

    case 'ul': {
      const items = Array.from(node.children)
        .filter(child => child.tagName === 'LI')
        .map(li => {
          const indent = '  '.repeat(listDepth);
          const content = nodeToMarkdown(li, listDepth);
          return `${indent}- ${content.trim()}`;
        })
        .join('\n');
      return '\n\n' + items + '\n\n';
    }

    case 'ol': {
      let i = 0;
      const items = Array.from(node.children)
        .filter(child => child.tagName === 'LI')
        .map(li => {
          i++;
          const indent = '  '.repeat(listDepth);
          const content = nodeToMarkdown(li, listDepth);
          return `${indent}${i}. ${content.trim()}`;
        })
        .join('\n');
      return '\n\n' + items + '\n\n';
    }

    case 'li': {
      const parts = [];
      Array.from(node.childNodes).forEach(child => {
        if (child.tagName === 'UL' || child.tagName === 'OL') {
          parts.push('\n' + nodeToMarkdown(child, listDepth + 1));
        } else {
          parts.push(nodeToMarkdown(child, listDepth));
        }
      });
      // Strip trailing newlines from li content (may come from <p> inside <li>)
      return parts.join('').replace(/\n+$/, '');
    }

    case 'dl': {
      // Definition list
      let md = '\n';
      Array.from(node.children).forEach(child => {
        md += nodeToMarkdown(child, listDepth);
      });
      return md + '\n';
    }

    case 'dt': {
      // Definition term - bold with trailing spaces for soft line break
      const text = processChildren().trim();
      return `**${text}**  \n`;
    }

    case 'dd': {
      // Definition description - indented
      const text = processChildren().trim();
      return `${text}\n\n`;
    }

    case 'table': {
      const rows = Array.from(node.querySelectorAll('tr'));
      if (rows.length === 0) return '';

      let md = '\n\n';
      rows.forEach((row, i) => {
        const cells = Array.from(row.querySelectorAll('th, td'));
        const cellTexts = cells.map(cell => {
          let text = '';
          cell.childNodes.forEach(child => {
            text += nodeToMarkdown(child);
          });
          return text.replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();
        });
        md += '| ' + cellTexts.join(' | ') + ' |\n';
        if (i === 0) {
          md += '| ' + cells.map(() => '---').join(' | ') + ' |\n';
        }
      });
      return md + '\n';
    }

    case 'aside': {
      const noticeDiv = node.querySelector('.notice');
      let type = 'Note';
      let emoji = '';

      if (noticeDiv) {
        if (noticeDiv.classList.contains('tip')) {
          type = 'Tip';
          emoji = '> ';
        } else if (noticeDiv.classList.contains('warning')) {
          type = 'Warning';
          emoji = '> ';
        } else if (noticeDiv.classList.contains('info')) {
          type = 'Info';
          emoji = '> ';
        } else if (noticeDiv.classList.contains('danger')) {
          type = 'Danger';
          emoji = '> ';
        }
      }

      const typeEl = node.querySelector('h4');
      if (typeEl) {
        type = typeEl.textContent.trim();
      }

      const contentEl = noticeDiv || node;
      let content = '';
      contentEl.childNodes.forEach(child => {
        content += nodeToMarkdown(child, listDepth);
      });
      content = content.trim().replace(/\n\s*/g, '\n> ');

      // Always start blockquote on new line with blank line before
      // Two trailing spaces after type for Markdown line break
      return `\n\n> **${type}**  \n> ${content}\n\n`;
    }

    case 'blockquote':
      return `> ${processChildren().trim()}\n\n`;

    case 'hr':
      return '\n---\n\n';

    case 'span':
    case 'section':
    case 'article':
    case 'nav':
      return processChildren();

    default:
      return processChildren();
  }
}

/**
 * Convert HTML to Markdown
 */
function convertHtmlToMarkdown(html, title, toc, url) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const content = document.body.firstChild;

  if (!content) {
    return { error: 'No content found' };
  }

  const markdown = nodeToMarkdown(content);

  // Build final Markdown
  let md = `---
title: "${title}"
source: "${BASE_URL}${url}"
---

# ${title}

`;

  // Add TOC
  if (toc && toc.length > 0) {
    md += '## On this page\n\n';
    toc.forEach(item => {
      md += `- [${item.text}](${item.href})\n`;
    });
    md += '\n---\n\n';
  }

  // Add content
  md += markdown;

  // Clean up formatting
  md = md
    .replace(/^\s+/gm, '')            // Remove leading whitespace on each line
    .replace(/\n{3,}/g, '\n\n')       // Max double newline
    .replace(/([^\n])\n(!\[)/g, '$1\n\n$2')  // Add blank line before images
    .replace(/(\]\([^)]+\))\n([^\n])/g, '$1\n\n$2')  // Add blank line after images
    .replace(/([^\n])\n(#+\s)/g, '$1\n\n$2')  // Add blank line before headings
    .replace(/([^\n>])\n(> \*\*)/g, '$1\n\n$2')  // Add blank line before blockquote start
    .replace(/>\n(> \*\*)/g, '>\n\n$1')  // Separate consecutive blockquotes
    .replace(/(> [^\n]+)\n([^>\n])/g, '$1\n\n$2')  // Add blank line after blockquote
    .replace(/([.!?)])\n(\*\*)/g, '$1\n\n$2')  // Add blank line before definition terms
    .replace(/([:.])\n(\d+\. |\- )/g, '$1\n\n$2')  // Add blank line before list (after : or .)
    .replace(/(\d+\. [^\n]+)\n([A-Z])/g, '$1\n\n$2')  // Add blank line after ordered list before text
    .replace(/(- [^\n]+)\n([A-Z])/g, '$1\n\n$2')  // Add blank line after unordered list before text
    .replace(/([^\n])\n(\|)/g, '$1\n\n$2')  // Add blank line before tables
    .replace(/(\|[^\n]*)\n\n(\|)/g, '$1\n$2')  // Remove blank lines within tables
    .trim() + '\n';

  // Compact consecutive list items
  let prev;
  do {
    prev = md;
    md = md.replace(/(- [^\n]+)\n\n(- )/g, '$1\n$2');
    md = md.replace(/(\d+\. [^\n]+)\n\n(\d+\. )/g, '$1\n$2');
  } while (md !== prev);

  return { markdown: md };
}

/**
 * Save Markdown file
 */
function saveMarkdown(outputDir, url, markdown) {
  // Handle root path first
  if (url === MANUAL_BASE || url === MANUAL_BASE + '/') {
    const filePath = path.join(outputDir, 'index.md');
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filePath, markdown, 'utf8');
    console.log(`Saved: ${filePath}`);
    return filePath;
  }

  let relativePath = url.replace(MANUAL_BASE + '/', '');
  if (relativePath.startsWith('/')) {
    relativePath = relativePath.substring(1);
  }

  // Fallback for empty path
  if (!relativePath) {
    relativePath = 'index';
  }

  const parts = relativePath.split('/');
  const fileName = parts.pop() + '.md';
  const dirPath = path.join(outputDir, ...parts);

  // Create directory
  fs.mkdirSync(dirPath, { recursive: true });

  // Save file
  const filePath = path.join(dirPath, fileName);
  fs.writeFileSync(filePath, markdown, 'utf8');
  console.log(`Saved: ${filePath}`);

  return filePath;
}

/**
 * Main function - process JSON input
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log('Usage: node html-to-md.js <input.json> [output-dir]');
    console.log('  input.json: JSON file with { html, title, toc, url }');
    console.log('  output-dir: Output directory (default: current dir)');
    process.exit(1);
  }

  const inputFile = args[0];
  const outputDir = args[1] || path.join(__dirname, '..');  // Default to parent directory

  // Read input
  const input = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

  // Convert
  const result = convertHtmlToMarkdown(input.html, input.title, input.toc, input.url);

  if (result.error) {
    console.error('Error:', result.error);
    process.exit(1);
  }

  // Save
  saveMarkdown(outputDir, input.url, result.markdown);
}

// Export for use as module
module.exports = { convertHtmlToMarkdown, saveMarkdown, nodeToMarkdown };

// Run if called directly
if (require.main === module) {
  main();
}

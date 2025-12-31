/**
 * HTML to Markdown Converter for Construct Manuals
 *
 * Usage:
 *   Single file:  node html-to-md.js <input.json> [output-dir]
 *   Batch mode:   node html-to-md.js --batch <input-dir> [output-dir]
 *
 * Supports: construct-3, addon-sdk (auto-detected from URL)
 */

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.construct.net';

// Manual configurations
const MANUALS = {
  'construct-3': '/en/make-games/manuals/construct-3',
  'addon-sdk': '/en/make-games/manuals/addon-sdk'
};

// Detect manual type from URL
function detectManualType(url) {
  for (const [type, base] of Object.entries(MANUALS)) {
    if (url.startsWith(base)) {
      return { type, base };
    }
  }
  return { type: 'construct-3', base: MANUALS['construct-3'] };
}

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
      let lang = codeEl?.className?.match(/language-(\w+)/)?.[1] || '';
      const content = codeEl ? codeEl.textContent : node.textContent;

      // Detect programming languages (often mislabeled)
      if (!lang || lang === 'javascript' || lang === 'js' || lang === 'none') {
        // C++ detection (avoid -> as it conflicts with WGSL)
        if (/\b(std::|#include\s*<|nullptr|NSString|NSArray|NSDictionary)\b/.test(content) ||
            /^\/\/\s*C\+\+/m.test(content) ||
            /\{\s*\{\s*"[^"]+",\s*"[^"]+"\s*\}/.test(content)) {  // C++ initializer list { { "key", "value" } }
          lang = 'cpp';
        }
        // JSON detection (starts with { or [ or "key":, has "key": pattern, no JS keywords)
        else if (/^\s*([\[{]|"[^"]+"\s*:)/.test(content) &&
                 /"[^"]+"\s*:/.test(content) &&
                 !/\b(function|const|let|var|class|import|export|=>|return|new\s+\w+)\b/.test(content)) {
          lang = 'json';
        }
        // WGSL detection (WebGPU shaders) - check before GLSL as it has more specific syntax
        else if (/(<f32>|<u32>|<i32>|:\s*f32|:\s*u32|:\s*i32|:\s*vec[234]|fn\s+\w+\s*\(|@fragment|@vertex|@binding|@group|var<uniform>|texture_2d|texture_depth|-> vec)/.test(content)) {
          lang = 'wgsl';
        }
        // GLSL detection (WebGL shaders)
        else if (/\b(texture2D|sampler2D|lowp|mediump|highp|gl_Frag|uniform\s+\w+\s+\w+;|varying\s+\w+\s+\w+;)\b/.test(content) ||
                 /^#extension\s+GL_/.test(content)) {
          lang = 'glsl';
        }
      }

      return `\n\n\`\`\`${lang}\n${content.trim()}\n\`\`\`\n\n`;
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
      // Skip toolbar (copy button container)
      if (node.classList.contains('toolbar')) {
        return '';
      }
      // Handle horizontal rule divs
      if (node.classList.contains('hr')) {
        return '\n\n---\n\n';
      }
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
      let result = '\n\n';
      let listEnded = false;
      // First pass: collect all items to determine if we need loose list
      const items = [];
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 1 && child.tagName === 'LI') {
          items.push(nodeToMarkdown(child, listDepth));
        }
      });
      // Use loose list (blank lines between items) if any item is long or multiline
      const useLooseList = items.some(item => item.length > 120 || /\n\s*\S/.test(item));

      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 1 && child.tagName === 'LI') {
          const indent = '  '.repeat(listDepth);
          const content = nodeToMarkdown(child, listDepth);
          const separator = useLooseList ? '\n\n' : '\n';
          result += `${indent}- ${content.trim()}${separator}`;
        } else if (child.nodeType === 1) {
          // Block-level elements break the list
          const blockTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DIV', 'P', 'ASIDE', 'BLOCKQUOTE'];
          if (blockTags.includes(child.tagName)) {
            if (!listEnded) {
              result += '\n';
              listEnded = true;
            }
            result += nodeToMarkdown(child, 0); // Reset list depth
          } else {
            result += nodeToMarkdown(child, listDepth);
          }
        } else {
          // Text nodes - only add if not just whitespace after list ended
          const text = nodeToMarkdown(child, listDepth);
          if (listEnded && text.trim()) {
            result += text;
          } else if (!listEnded) {
            result += text;
          }
        }
      });
      return result + '\n';
    }

    case 'ol': {
      let i = 0;
      let result = '\n\n';
      let listEnded = false;
      // First pass: collect all items to determine if we need loose list
      const items = [];
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 1 && child.tagName === 'LI') {
          items.push(nodeToMarkdown(child, listDepth));
        }
      });
      // Use loose list (blank lines between items) if any item is long or multiline
      const useLooseList = items.some(item => item.length > 120 || /\n\s*\S/.test(item));

      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 1 && child.tagName === 'LI') {
          i++;
          const indent = '  '.repeat(listDepth);
          const content = nodeToMarkdown(child, listDepth);
          const separator = useLooseList ? '\n\n' : '\n';
          result += `${indent}${i}. ${content.trim()}${separator}`;
        } else if (child.nodeType === 1) {
          // Block-level elements break the list
          const blockTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DIV', 'P', 'ASIDE', 'BLOCKQUOTE'];
          if (blockTags.includes(child.tagName)) {
            if (!listEnded) {
              result += '\n';
              listEnded = true;
            }
            result += nodeToMarkdown(child, 0); // Reset list depth
          } else {
            result += nodeToMarkdown(child, listDepth);
          }
        } else {
          // Text nodes - only add if not just whitespace after list ended
          const text = nodeToMarkdown(child, listDepth);
          if (listEnded && text.trim()) {
            result += text;
          } else if (!listEnded) {
            result += text;
          }
        }
      });
      return result + '\n';
    }

    case 'li': {
      // Separate inline content from block-level content
      const blockTags = ['UL', 'OL', 'DL', 'ASIDE', 'DIV', 'PRE', 'BLOCKQUOTE', 'TABLE'];
      let inlineContent = '';
      let blockContent = '';
      const indent = '   '; // 3 spaces for ordered list continuation

      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 1 && blockTags.includes(child.tagName)) {
          // Block-level element - process and indent
          let block = nodeToMarkdown(child, listDepth + 1);
          // Indent each line of block content
          block = block.replace(/^(?=.)/gm, indent);
          blockContent += '\n' + block;
        } else {
          inlineContent += nodeToMarkdown(child, listDepth);
        }
      });

      // Combine: inline content first, then indented block content
      let result = inlineContent.trim();
      if (blockContent) {
        // Only trim newlines, preserve indentation spaces
        blockContent = blockContent.replace(/^\n+/, '').replace(/\n+$/, '');
        result += '\n' + blockContent;
      }
      return result;
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
      let type = 'Tip';

      if (noticeDiv) {
        if (noticeDiv.classList.contains('warning')) {
          type = 'Warning';
        } else if (noticeDiv.classList.contains('info')) {
          type = 'Info';
        } else if (noticeDiv.classList.contains('danger')) {
          type = 'Danger';
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
      content = content.trim();

      // Check if content starts with a known type label (e.g., **Note:** or **Warning:**)
      // Only extract if it's a known type, otherwise keep as content
      const knownTypes = ['Note', 'NOTE', 'Warning', 'WARNING', 'Tip', 'TIP', 'Info', 'INFO', 'Danger', 'DANGER', 'Important', 'IMPORTANT'];
      const boldTypeMatch = content.match(/^\*\*([^*:]+):?\*\*:?\s*/);
      if (boldTypeMatch && knownTypes.includes(boldTypeMatch[1])) {
        type = boldTypeMatch[1];
        content = content.substring(boldTypeMatch[0].length);
      }

      // Format for blockquote continuation
      content = content.replace(/\n\s*/g, '\n> ');

      return `\n\n> **${type}**  \n> ${content}\n\n`;
    }

    case 'blockquote':
      return `> ${processChildren().trim()}\n\n`;

    case 'hr':
      return '\n---\n\n';

    case 'button':
      // Skip copy buttons from code blocks
      if (node.classList.contains('copy-to-clipboard-button')) {
        return '';
      }
      return processChildren();

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
  const body = document.body;

  if (!body || !body.childNodes.length) {
    return { error: 'No content found' };
  }

  // Process ALL children of body, not just firstChild
  let markdown = '';
  body.childNodes.forEach(child => {
    markdown += nodeToMarkdown(child);
  });

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

  // Protect code blocks during cleanup (replace with placeholders)
  const codeBlocks = [];
  md = md.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // Clean up formatting (preserve intentional indentation for list continuations)
  md = md
    .replace(/^ /gm, '')              // Remove single leading space (collapsed whitespace), preserve multiple
    .replace(/\n{3,}/g, '\n\n')       // Max double newline
    .replace(/([^\n])\n(!\[)/g, '$1\n\n$2')  // Add blank line before images
    .replace(/(!\[[^\]]*\]\([^)]+\))\n([^\n])/g, '$1\n\n$2')  // Add blank line after images (not links)
    .replace(/([^\n])\n(#+\s)/g, '$1\n\n$2')  // Add blank line before headings
    .replace(/([^\n>\s])\n(> \*\*)/g, '$1\n\n$2')  // Add blank line before blockquote start (not after trailing spaces)
    .replace(/>\n(> \*\*)/g, '>\n\n$1')  // Separate consecutive blockquotes
    .replace(/(> [^\n]+)\n([^>\n\s])/g, '$1\n\n$2')  // Add blank line after blockquote (not before indented content)
    .replace(/([.!?)])\n(\*\*)/g, '$1\n\n$2')  // Add blank line before definition terms
    .replace(/([:.])\n(\d+\. |\- )/g, '$1\n\n$2')  // Add blank line before list (after : or .)
    .replace(/(\d+\. [^\n]+)\n([A-Z])/g, '$1\n\n$2')  // Add blank line after ordered list before text
    .replace(/(- [^\n]+)\n([A-Z])/g, '$1\n\n$2')  // Add blank line after unordered list before text
    .replace(/([^\n])\n(\|)/g, '$1\n\n$2')  // Add blank line before tables
    .replace(/(\|[^\n]*)\n\n(\|)/g, '$1\n$2')  // Remove blank lines within tables
    .replace(/([.!?)\]]) ?\n(---)/g, '$1\n\n$2')  // Add blank line before horizontal rules (after sentences)
    .replace(/([^\n])\n(__CODE_BLOCK_)/g, '$1\n\n$2')  // Add blank line before code blocks
    .trim() + '\n';

  // Restore code blocks
  md = md.replace(/__CODE_BLOCK_(\d+)__/g, (_, i) => codeBlocks[parseInt(i)]);

  return { markdown: md };
}

/**
 * Save Markdown file
 */
function saveMarkdown(outputDir, url, markdown, manualBase) {
  // Handle root path first
  if (url === manualBase || url === manualBase + '/') {
    const filePath = path.join(outputDir, 'index.md');
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filePath, markdown, 'utf8');
    return filePath;
  }

  let relativePath = url.replace(manualBase + '/', '');
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

  return filePath;
}

/**
 * Process single JSON file
 */
function processFile(inputFile, outputDir) {
  const input = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const { type, base } = detectManualType(input.url);

  const result = convertHtmlToMarkdown(input.html, input.title, input.toc, input.url);

  if (result.error) {
    return { error: result.error };
  }

  const filePath = saveMarkdown(outputDir, input.url, result.markdown, base);
  return { success: true, filePath, type };
}

/**
 * Batch process all JSON files in a directory
 */
function batchProcess(inputDir, outputDir) {
  console.log('='.repeat(60));
  console.log('HTML to Markdown Batch Converter');
  console.log('='.repeat(60));
  console.log(`Input:  ${inputDir}`);
  console.log(`Output: ${outputDir}\n`);

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.json'));
  console.log(`Found ${files.length} JSON files\n`);

  let success = 0;
  let failed = 0;

  files.forEach((file, i) => {
    const progress = `[${i + 1}/${files.length}]`;
    try {
      const inputPath = path.join(inputDir, file);
      const result = processFile(inputPath, outputDir);

      if (result.error) {
        console.log(`${progress} Error: ${file} - ${result.error}`);
        failed++;
        return;
      }

      console.log(`${progress} ${path.relative(outputDir, result.filePath)}`);
      success++;
    } catch (err) {
      console.log(`${progress} Error: ${file} - ${err.message}`);
      failed++;
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('Conversion completed!');
  console.log('='.repeat(60));
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log('Usage:');
    console.log('  Single file:  node html-to-md.js <input.json> [output-dir]');
    console.log('  Batch mode:   node html-to-md.js --batch <input-dir> [output-dir]');
    console.log('');
    console.log('Supports: construct-3, addon-sdk (auto-detected from URL)');
    process.exit(1);
  }

  // Batch mode
  if (args[0] === '--batch') {
    if (args.length < 2) {
      console.error('Error: --batch requires input directory');
      process.exit(1);
    }
    const inputDir = args[1];
    const outputDir = args[2] || path.join(__dirname, '..');
    batchProcess(inputDir, outputDir);
    return;
  }

  // Single file mode
  const inputFile = args[0];
  const outputDir = args[1] || path.join(__dirname, '..');

  const result = processFile(inputFile, outputDir);

  if (result.error) {
    console.error('Error:', result.error);
    process.exit(1);
  }

  console.log(`Saved: ${result.filePath}`);
}

// Export for use as module
module.exports = { convertHtmlToMarkdown, saveMarkdown, nodeToMarkdown };

// Run if called directly
if (require.main === module) {
  main();
}

/**
 * Regenerate markdown files from raw JSON data
 * Usage: node regenerate.js [version]
 * Example: node regenerate.js r449
 */
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const BASE_URL = 'https://www.construct.net';

const TARGETS = {
  'Construct3-Manual': {
    basePath: '/en/make-games/manuals/construct-3',
    outputDir: 'Construct3-Manual',
  },
  'Construct3-Addon-SDK': {
    basePath: '/en/make-games/manuals/addon-sdk',
    outputDir: 'Construct3-Addon-SDK',
  },
};

// ─── CLI ─────────────────────────────────────────────────────────────

const version = process.argv[2];
if (!version) {
  // Find latest version
  const dataDir = path.join(__dirname, 'data');
  const versions = fs.readdirSync(dataDir).filter(d => d.startsWith('r')).sort();
  if (versions.length === 0) { console.error('No data found. Run the scraper first.'); process.exit(1); }
  console.log('Available versions:', versions.join(', '));
  console.log('Usage: node regenerate.js <version>');
  process.exit(0);
}

const dataRoot = path.join(__dirname, 'data', version);
if (!fs.existsSync(dataRoot)) { console.error(`Version ${version} not found in data/`); process.exit(1); }

// ─── Helpers ─────────────────────────────────────────────────────────

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\- ]/g, '').replace(/ /g, '-');
}

function convertLinks(markdown, currentUrl, target) {
  return markdown.replace(
    /\[([^\]]*)\]\((https:\/\/www\.construct\.net(?:\/en)?\/make-games\/manuals\/(construct-3|addon-sdk)(\/[^)]*)?)\)/g,
    (match, text, fullUrl, docType, subPath) => {
      const linkTarget = docType === 'construct-3' ? TARGETS['Construct3-Manual'] : TARGETS['Construct3-Addon-SDK'];
      const linkPath = (subPath || '').replace(/^\//, '');
      const currentPath = currentUrl.replace(BASE_URL, '').replace(target.basePath + '/', '').replace(target.basePath, '');
      const currentDir = currentPath.includes('/') ? currentPath.substring(0, currentPath.lastIndexOf('/')) : '';

      if (linkTarget.outputDir === target.outputDir) {
        const targetFile = linkPath ? linkPath + '.md' : 'index.md';
        if (currentDir) {
          const rel = path.relative(currentDir, targetFile).replace(/\\/g, '/');
          return `[${text}](${rel})`;
        }
        return `[${text}](${targetFile})`;
      } else {
        const targetFile = linkPath ? linkPath + '.md' : 'index.md';
        const upLevels = (currentDir ? currentDir.split('/').length : 0) + 1;
        const prefix = '../'.repeat(upLevels);
        return `[${text}](${prefix}${linkTarget.outputDir}/${targetFile})`;
      }
    }
  );
}

function findJsonFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findJsonFiles(full));
    else if (entry.name.endsWith('.json')) results.push(full);
  }
  return results;
}

// ─── Generate Markdown ──────────────────────────────────────────────

function generateMarkdown(data, jsonPath, targetKey) {
  const target = TARGETS[targetKey];

  // Build heading slug map
  const headingSlugs = [];
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(data.content)) !== null) {
    const text = match[2].trim();
    if (text !== 'On this page') headingSlugs.push(slugify(text));
  }

  const release = (data.savedWithRelease || version || '').replace(/^r/, '');
  let md = `---\ntitle: "${data.title.replace(/"/g, '\\"')}"\nsource: "${BASE_URL}${data.url}"\nrelease: ${release}\n---\n\n`;

  if (data.toc?.length > 0) {
    md += '## On this page\n\n';
    data.toc.forEach((item, i) => {
      let href = item.href;
      const linkMatch = href.match(/^#internalH1Link(\d+)$/);
      if (linkMatch && headingSlugs[parseInt(linkMatch[1])]) {
        href = '#' + headingSlugs[parseInt(linkMatch[1])];
      }
      md += `- [${item.text}](${href})\n`;
    });
    md += '\n---\n\n';
  }

  md += data.content;

  // Convert links
  const url = BASE_URL + data.url;
  md = convertLinks(md, url, target);

  // Markdownlint cleanup
  let lines = md.split('\n');
  const result = [];
  let inCodeBlock = false;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (i === 0 && line.trim() === '---') { inFrontmatter = true; result.push(line); continue; }
    if (inFrontmatter && line.trim() === '---') { inFrontmatter = false; result.push(line); continue; }
    if (inFrontmatter) { result.push(line); continue; }

    if (line.trim().startsWith('```')) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    // Fix leading whitespace
    const trimmed = line.trimStart();
    if (line.match(/^ {4,}\S/) &&
        !trimmed.startsWith('-') && !trimmed.startsWith('*') &&
        !trimmed.startsWith('>') && !trimmed.startsWith('|') &&
        !trimmed.match(/^\d+\./)) {
      line = trimmed;
    }

    // MD032: blank line before list items
    const isListItem = /^\s*[-*+]\s/.test(line) || /^\s*\d+\.\s/.test(line);
    if (isListItem && result.length > 0) {
      const prev = result[result.length - 1];
      const prevIsList = /^\s*[-*+]\s/.test(prev) || /^\s*\d+\.\s/.test(prev);
      if (prev.trim() !== '' && !prevIsList && !prev.startsWith('#')) {
        result.push('');
      }
    }

    // MD032: blank line after list ends
    if (!isListItem && line.trim() !== '' && result.length > 0) {
      const prev = result[result.length - 1];
      if (/^\s*[-*+]\s/.test(prev) || /^\s*\d+\.\s/.test(prev)) {
        result.push('');
      }
    }

    // Blank line before blockquotes
    if (line.startsWith('>') && result.length > 0) {
      const prev = result[result.length - 1];
      if (prev.trim() !== '' && !prev.startsWith('>')) {
        result.push('');
      }
    }

    // Blank line before **term**
    if (line.startsWith('**') && result.length > 0) {
      const prev = result[result.length - 1];
      if (prev.trim() !== '' && !prev.startsWith('#') && prev.trim() !== '---') {
        result.push('');
      }
    }

    result.push(line);
  }

  md = result.join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\t/g, '  ')
    // Remove stray "Copy" button text after code blocks
    .replace(/```\n\nCopy\n/g, '```\n')
    // Blockquote: trailing two spaces after **Type** for line break
    .replace(/^(> \*\*(Tip|Note|Warning|Info|[^*]+)\*\*)$/gm, '$1  ')
    .replace(/^(> \*\*(Tip|Note|Warning|Info|[^*]+)\*\*)\n>\n(> )/gm, '$1  \n$3')
    // MD045: add alt text to images missing it
    .replace(/!\[\]\(([^)]+)\)/g, (match, src) => {
      const alt = src.split('/').pop().replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ');
      return `![${alt}](${src})`;
    })
    .trim() + '\n';

  return md;
}

// ─── Main ────────────────────────────────────────────────────────────

console.log(`Regenerating from ${version}...`);

for (const targetKey of Object.keys(TARGETS)) {
  const target = TARGETS[targetKey];
  const sourceDir = path.join(dataRoot, targetKey);
  const outputDir = path.join(REPO_ROOT, target.outputDir);

  if (!fs.existsSync(sourceDir)) {
    console.log(`  ${targetKey}: no data, skipping`);
    continue;
  }

  const jsonFiles = findJsonFiles(sourceDir);
  let count = 0;

  for (const jsonPath of jsonFiles) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const relPath = path.relative(sourceDir, jsonPath).replace(/\\/g, '/').replace(/\.json$/, '.md');
    const outPath = path.join(outputDir, relPath);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const md = generateMarkdown(data, jsonPath, targetKey);
    fs.writeFileSync(outPath, md, 'utf8');
    count++;
  }

  // Clean up orphaned files
  const expectedFiles = new Set(jsonFiles.map(f =>
    path.join(outputDir, path.relative(sourceDir, f).replace(/\\/g, '/').replace(/\.json$/, '.md'))
  ));
  let removed = 0;
  function cleanDir(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        cleanDir(full);
        // Remove empty dirs
        if (fs.readdirSync(full).length === 0) fs.rmdirSync(full);
      } else if (entry.name.endsWith('.md') && entry.name !== 'CLAUDE.md' && entry.name !== 'README.md') {
        if (!expectedFiles.has(full)) {
          fs.unlinkSync(full);
          removed++;
        }
      }
    }
  }
  cleanDir(outputDir);

  console.log(`  ${targetKey}: ${count} files generated, ${removed} orphans removed`);
}

console.log('Done!');

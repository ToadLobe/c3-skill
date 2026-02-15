# Construct 3 Documentation Scraper

爬虫和转换工具，用于从 [construct.net](https://www.construct.net/) 抓取官方文档并转换为 Markdown 格式。

## 安装

```bash
cd .scripts
npm install
```

需要系统已安装 Google Chrome（使用 `puppeteer-core`，不捆绑 Chromium）。

## 用法

### 全量抓取

```bash
# 抓取 Manual + Addon SDK
node autonomous-scraper.js all --force

# 仅抓取 Manual
node autonomous-scraper.js manual --force

# 仅抓取 Addon SDK
node autonomous-scraper.js addon-sdk --force
```

### 增量更新

```bash
# 跳过已有文件，只抓新页面
node autonomous-scraper.js all

# 从上次中断处继续
node autonomous-scraper.js all --resume
```

### 从缓存重新生成 Markdown

修改了转换逻辑后，无需重新爬取，直接从 JSON 原始数据重新生成：

```bash
node regenerate.js r449
```

### npm scripts

```bash
npm run scrape           # 全量抓取 all --force
npm run scrape:manual    # 仅 Manual
npm run scrape:sdk       # 仅 Addon SDK
npm run regenerate       # 列出可用版本
```

## 文件说明

| 文件 | 说明 |
|------|------|
| `autonomous-scraper.js` | 主爬虫脚本（v3），自动发现 URL、抓取、转换、保存 |
| `regenerate.js` | 从 JSON 原始数据重新生成 Markdown |
| `package.json` | 依赖配置（puppeteer-core） |
| `data/r{版本号}/` | 原始 JSON 数据缓存（按版本号归档） |
| `scrape-state-*.json` | 爬虫运行状态（用于断点续传） |

## 工作流程

```
construct.net ──[爬虫]──▶ data/r449/*.json ──[regenerate]──▶ Construct3-Manual/*.md
                                                           Construct3-Addon-SDK/*.md
```

1. **爬虫**通过 Puppeteer 打开 Chrome，从侧边导航自动发现所有页面 URL
2. 逐页抓取 HTML，在浏览器内用 `page.evaluate` 转换为结构化数据（title、toc、content）
3. 原始数据保存为 JSON 到 `data/r{版本号}/`
4. 同时生成 Markdown 文件到仓库对应目录，自动处理：
   - 绝对链接 → 相对路径
   - markdownlint 合规（MD009/MD012/MD025/MD032/MD045/MD051）
   - 前导空白清理
   - 定义列表格式化
   - 代码块复制按钮文本清理

## 版本号检测

从 `https://editor.construct.net/versions.json` 自动获取最新 stable 版本号，回退到 releases 页面 HTML 解析。

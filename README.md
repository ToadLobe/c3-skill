# Construct 3 Manual (Markdown)

Unofficial Markdown version of the official Construct 3 documentation for easy reading and reference.

[Construct 3](https://www.construct.net/) is a browser-based 2D/3D game development engine with visual event system and JavaScript/TypeScript scripting support.

---

## Source

| Source | Sections | URL |
|--------|:--------:|-----|
| Construct 3 Manual | 340 | https://www.construct.net/en/make-games/manuals/construct-3 |

---

## Tools

### html-to-md.js

Convert Construct 3 manual HTML to Markdown format.

**Usage:**

```bash
node .scripts/html-to-md.js <input.json> [output-dir]
```

**Input JSON format:**

```json
{
  "title": "Page Title",
  "url": "/en/make-games/manuals/construct-3/page-path",
  "toc": [
    { "text": "Section 1", "href": "#section-1" }
  ],
  "html": "<div>...</div>"
}
```

See `.scripts/input.example.json` for a complete example.

---

## License

All content belongs to [Scirra Ltd](https://www.construct.net/). This repository is for personal learning and reference purposes only.

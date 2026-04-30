# c3-skill

A [Claude Code](https://claude.ai/code) agent skill that gives your AI in-depth knowledge of the [Construct 3](https://www.construct.net/) scripting APIs.

Covers the complete Construct 3 scripting manual: `IRuntime`, `IInstance`, `IWorldInstance`, all built-in plugin interfaces (Sprite, Audio, Mouse, Keyboard, Tilemap, etc.), all behavior interfaces (Bullet, Platform, Physics, Pathfinding, Tween, etc.), layout/layer APIs, graphics interfaces, addon SDK interfaces, and usage guides.

## Install

```bash
npx skills install ToadLobe/c3-skill
```

Or install globally (available in all projects):

```bash
npx skills install ToadLobe/c3-skill -g
```

## Usage

Once installed, your agent automatically applies this skill when you ask Construct 3 scripting questions. You can also invoke it explicitly:

```
/c3
```

## What's included

| Section | Files |
|---|---|
| Core runtime | `IRuntime` events, APIs, SDK |
| Object interfaces | `IInstance`, `IWorldInstance`, `IObjectType`, `IBehavior`, animations, effects |
| Layout & layer | `ILayout`, `ILayer` |
| Plugin interfaces | 35 built-in plugins (Sprite, Audio, Tilemap, Drawing Canvas, 3D, …) |
| Behavior interfaces | 22 built-in behaviors (Bullet, Platform, Physics, Pathfinding, Tween, …) |
| Graphics interfaces | `IRenderer`, `ITexture`, `IMeshData`, `IRendererText` |
| Utility interfaces | Storage, asset manager, collision engine, tween/timeline state, platform info |
| Addon SDK interfaces | `ISdkInstanceBase`, `ISdkPluginBase`, `ISdkBehaviorBase`, utils, … |
| Guides | External editor, import maps, subclassing, minification |
| Using scripting | Script files, event sheet scripts, TypeScript, debugging |

## Source

Documentation scraped from the official [Construct 3 manual](https://www.construct.net/en/make-games/manuals/construct-3/scripting) (release 476.3).

## License

MIT

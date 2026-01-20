# Construct 3 Addon SDK Documentation

This directory contains the complete Construct 3 Addon SDK documentation, converted from the official manual at [construct.net](index.md).

## Overview

The Addon SDK allows developers to create custom addons for Construct 3 using JavaScript or TypeScript:

- **Plugins** - New object types with custom actions, conditions, and expressions
- **Behaviors** - Reusable logic that can be attached to objects
- **Effects** - Custom visual shaders (GLSL for WebGL, WGSL for WebGPU)
- **Themes** - Custom CSS appearances for the Construct 3 editor

## Directory Structure

```
addon-sdk/
├── index.md                    # SDK overview and getting started
├── runtime-reference.md        # Runtime API reference
├── guide/                      # Tutorials and guides
│   ├── addon-metadata.md       # addon.json configuration
│   ├── c3addon-file.md         # .c3addon file format
│   ├── configuring-plugins.md  # Plugin setup
│   ├── configuring-behaviors.md
│   ├── configuring-effects.md
│   │   ├── webgl-shaders.md    # GLSL shader guide
│   │   └── webgpu-shaders.md   # WGSL shader guide
│   ├── defining-aces.md        # Actions, Conditions, Expressions
│   ├── language-file.md        # Localization (en-US.json)
│   ├── runtime-scripts.md      # Runtime code
│   ├── editor-scripts.md       # Editor-side code
│   ├── wrapper-extensions.md   # Native DLL integration
│   ├── typescript-support.md   # TypeScript usage
│   ├── enabling-developer-mode.md
│   ├── using-developer-mode.md
│   ├── porting-c2-addons.md    # Construct 2 migration
│   ├── porting-addon-sdk-v2.md # SDK v1→v2 migration
│   ├── script-minification.md  # Export minification
│   ├── timeline-integration.md # Timeline controller
│   ├── themes.md               # Theme creation
│   └── safe-mode.md            # Addon safe mode
└── reference/                  # API reference
    ├── iplugininfo.md          # Plugin configuration
    ├── ibehaviorinfo.md        # Behavior configuration
    ├── pluginproperty.md       # Property types
    ├── specifying-dependencies.md
    ├── finding-addon-ids.md
    ├── base-classes/           # Instance base classes
    ├── geometry-interfaces/    # Rect, Quad, Color
    ├── graphics-interfaces/    # WebGL/rendering APIs
    ├── misc-interfaces/        # ILang, IZipFile
    ├── model-interfaces/       # IProject, ILayout, ILayer
    ├── object-interfaces/      # IObjectInstance, IBehavior
    └── ui-interfaces/          # ILayoutView, Utilities
```

## Key Documents

| Topic | File | Description |
|-------|------|-------------|
| Getting Started | [index.md](index.md) | SDK overview and download |
| Plugin Setup | [guide/configuring-plugins.md](guide/configuring-plugins.md) | Creating plugins |
| Behavior Setup | [guide/configuring-behaviors.md](guide/configuring-behaviors.md) | Creating behaviors |
| ACEs | [guide/defining-aces.md](guide/defining-aces.md) | Actions, Conditions, Expressions |
| Localization | [guide/language-file.md](guide/language-file.md) | en-US.json format |
| WebGL Shaders | [guide/configuring-effects/webgl-shaders.md](guide/configuring-effects/webgl-shaders.md) | GLSL effects |
| WebGPU Shaders | [guide/configuring-effects/webgpu-shaders.md](guide/configuring-effects/webgpu-shaders.md) | WGSL effects |
| Wrapper Extensions | [guide/wrapper-extensions.md](guide/wrapper-extensions.md) | Native DLL/dylib/so |
| TypeScript | [guide/typescript-support.md](guide/typescript-support.md) | TypeScript support |

## Statistics

- **Total files:** 62 markdown documents
- **Guide section:** 20 documents
- **Reference section:** 38 documents

## Source & Copyright

This documentation is converted from the official Construct 3 Addon SDK manual for personal learning and AI-assisted development purposes.

**Original Source:** https://www.construct.net/en/make-games/manuals/addon-sdk

**SDK Repository:** https://github.com/Scirra/Construct-Addon-SDK

**License:** [Creative Commons BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

**Copyright © [Scirra Ltd](https://www.construct.net/).** All rights reserved.

This converted version is for personal reference only. For the most up-to-date and authoritative documentation, please visit the official website.

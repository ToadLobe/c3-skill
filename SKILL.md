---
name: c3-skill
description: In-depth knowledge of Construct 3 scripting APIs (JavaScript/TypeScript). Use when writing or reviewing Construct 3 runtime scripts, working with IRuntime, IInstance, IWorldInstance, plugin interfaces (Sprite, Audio, Mouse, etc.), behavior interfaces (Bullet, Platform, Physics, etc.), addon SDK interfaces, layout/layer APIs, graphics interfaces, or any other Construct 3 scripting topic.
license: MIT
metadata:
  author: ToadLobe
  version: "1.0"
  source: https://www.construct.net/en/make-games/manuals/construct-3/scripting
---

## Construct 3 Scripting Reference

This skill gives you access to the complete Construct 3 scripting manual. All reference files live under `Construct3-Manual/scripting/` relative to wherever this skill was installed. When a user asks about a Construct 3 scripting API, read the relevant file(s) before answering.

### How to use the docs

Read files directly to get accurate, up-to-date API details. Prefer reading the narrowest file that answers the question (e.g. `plugin-interfaces/sprite.md` for Sprite questions) before falling back to broader files.

### Reference map

**Entry points**
- `Construct3-Manual/scripting/overview.md` — JS vs TS, terminology, learning resources
- `Construct3-Manual/scripting/scripting-reference.md` — commonly used APIs overview

**Core runtime**
- `Construct3-Manual/scripting/scripting-reference/iruntime.md` — `IRuntime`: events (tick, resize, layout events, input), APIs (layouts, objects, assets, storage, platform, renderer, keyboard, mouse, touch, gamepad, collision, tween, timeline)

**Object interfaces** (base classes for all instances)
- `scripting-reference/object-interfaces/iinstance.md` — base class: events, destroy, signal, tags, uid, iid, instVars, behaviors
- `scripting-reference/object-interfaces/iworldinstance.md` — 2D world instances: x, y, width, height, angle, opacity, effects, mesh, zElevation
- `scripting-reference/object-interfaces/iobjecttype.md` — object type / class
- `scripting-reference/object-interfaces/iobjectclass.md` — object class
- `scripting-reference/object-interfaces/ifamily.md` — family interface
- `scripting-reference/object-interfaces/ibehavior.md` — behavior
- `scripting-reference/object-interfaces/ibehaviorinstance.md` — behavior instance
- `scripting-reference/object-interfaces/ibehaviortype.md` — behavior type
- `scripting-reference/object-interfaces/idominstance.md` — DOM-based instances
- `scripting-reference/object-interfaces/ianimation.md` — animation
- `scripting-reference/object-interfaces/ianimationframe.md` — animation frame
- `scripting-reference/object-interfaces/ieffectinstance.md` — effect instance
- `scripting-reference/object-interfaces/iimageinfo.md` — image info
- `scripting-reference/object-interfaces/iplugin.md` — plugin

**Layout & layer**
- `scripting-reference/layout-interfaces/ilayout.md` — ILayout: events, go to layout, parallax, effects, instances
- `scripting-reference/layout-interfaces/ilayout/ilayer.md` — ILayer: visibility, parallax, z-order, instances

**Plugin interfaces** (one file per built-in object type)
- `scripting-reference/plugin-interfaces/sprite.md`
- `scripting-reference/plugin-interfaces/audio.md`
- `scripting-reference/plugin-interfaces/keyboard.md`
- `scripting-reference/plugin-interfaces/mouse.md`
- `scripting-reference/plugin-interfaces/touch.md`
- `scripting-reference/plugin-interfaces/text.md`
- `scripting-reference/plugin-interfaces/text-input.md`
- `scripting-reference/plugin-interfaces/array.md`
- `scripting-reference/plugin-interfaces/dictionary.md`
- `scripting-reference/plugin-interfaces/json.md`
- `scripting-reference/plugin-interfaces/binary-data.md`
- `scripting-reference/plugin-interfaces/csv.md`
- `scripting-reference/plugin-interfaces/tilemap.md`
- `scripting-reference/plugin-interfaces/tiled-background.md`
- `scripting-reference/plugin-interfaces/9-patch.md`
- `scripting-reference/plugin-interfaces/particles.md`
- `scripting-reference/plugin-interfaces/drawing-canvas.md`
- `scripting-reference/plugin-interfaces/svg-picture.md`
- `scripting-reference/plugin-interfaces/spritefont.md`
- `scripting-reference/plugin-interfaces/html-element.md`
- `scripting-reference/plugin-interfaces/button.md`
- `scripting-reference/plugin-interfaces/list.md`
- `scripting-reference/plugin-interfaces/slider-bar.md`
- `scripting-reference/plugin-interfaces/progress-bar.md`
- `scripting-reference/plugin-interfaces/file-chooser.md`
- `scripting-reference/plugin-interfaces/file-system.md`
- `scripting-reference/plugin-interfaces/advanced-random.md`
- `scripting-reference/plugin-interfaces/shadow-light.md`
- `scripting-reference/plugin-interfaces/multiplayer.md`
- `scripting-reference/plugin-interfaces/construct-game-services.md`
- `scripting-reference/plugin-interfaces/facebook.md`
- `scripting-reference/plugin-interfaces/internationalization.md`
- `scripting-reference/plugin-interfaces/timeline-controller.md`
- `scripting-reference/plugin-interfaces/3d-camera.md`
- `scripting-reference/plugin-interfaces/3d-model.md`
- `scripting-reference/plugin-interfaces/3d-shape.md`

**Behavior interfaces** (one file per built-in behavior)
- `scripting-reference/behavior-interfaces/bullet.md`
- `scripting-reference/behavior-interfaces/platform.md`
- `scripting-reference/behavior-interfaces/physics.md`
- `scripting-reference/behavior-interfaces/pathfinding.md`
- `scripting-reference/behavior-interfaces/tween.md`
- `scripting-reference/behavior-interfaces/anchor.md`
- `scripting-reference/behavior-interfaces/car.md`
- `scripting-reference/behavior-interfaces/drag-drop.md`
- `scripting-reference/behavior-interfaces/fade.md`
- `scripting-reference/behavior-interfaces/flash.md`
- `scripting-reference/behavior-interfaces/follow.md`
- `scripting-reference/behavior-interfaces/jump-thru.md`
- `scripting-reference/behavior-interfaces/line-of-sight.md`
- `scripting-reference/behavior-interfaces/move.md`
- `scripting-reference/behavior-interfaces/orbit.md`
- `scripting-reference/behavior-interfaces/rotate.md`
- `scripting-reference/behavior-interfaces/shadow-caster.md`
- `scripting-reference/behavior-interfaces/sine.md`
- `scripting-reference/behavior-interfaces/solid.md`
- `scripting-reference/behavior-interfaces/tile-movement.md`
- `scripting-reference/behavior-interfaces/timer.md`
- `scripting-reference/behavior-interfaces/turret.md`
- `scripting-reference/behavior-interfaces/direction.md`

**Graphics interfaces**
- `scripting-reference/graphics-interfaces/irenderer-interface.md` — IRenderer: drawing commands, blend modes
- `scripting-reference/graphics-interfaces/irenderertext.md` — IRendererText
- `scripting-reference/graphics-interfaces/itexture.md` — ITexture
- `scripting-reference/graphics-interfaces/imeshdata.md` — IMeshData

**Utility interfaces**
- `scripting-reference/interfaces/iaabb3d.md`
- `scripting-reference/interfaces/iassetmanager.md`
- `scripting-reference/interfaces/icollisionengine.md`
- `scripting-reference/interfaces/istorage.md`
- `scripting-reference/interfaces/itweenstate.md`
- `scripting-reference/interfaces/itimelinestate.md`
- `scripting-reference/interfaces/itimelinestatebase.md`
- `scripting-reference/interfaces/iplatforminfo.md`
- `scripting-reference/interfaces/instance-event.md`
- `scripting-reference/interfaces/behavior-instance-event.md`

**Addon SDK interfaces** (for building custom addons)
- `scripting-reference/addon-sdk-interfaces.md` — overview
- `scripting-reference/addon-sdk-interfaces/isdkinstancebase.md`
- `scripting-reference/addon-sdk-interfaces/isdkworldinstancebase.md`
- `scripting-reference/addon-sdk-interfaces/isdkpluginbase.md`
- `scripting-reference/addon-sdk-interfaces/isdkobjecttypebase.md`
- `scripting-reference/addon-sdk-interfaces/isdkdominstancebase.md`
- `scripting-reference/addon-sdk-interfaces/isdkdompluginbase.md`
- `scripting-reference/addon-sdk-interfaces/isdkbehaviorbase.md`
- `scripting-reference/addon-sdk-interfaces/isdkbehaviorinstancebase.md`
- `scripting-reference/addon-sdk-interfaces/isdkbehaviortypebase.md`
- `scripting-reference/addon-sdk-interfaces/isdkutils.md`
- `scripting-reference/addon-sdk-interfaces/iloopingconditioncontext.md`

**Guides**
- `guides/using-external-editor.md` — VS Code / external editor setup
- `guides/using-import-maps.md` — import maps for modules
- `guides/subclassing-instances.md` — subclassing instances
- `guides/advanced-minification.md` — advanced minification

**Using scripting tutorials**
- `using-scripting/coding-in-construct.md` — writing code inside Construct
- `using-scripting/script-files.md` — script files, runOnStartup
- `using-scripting/scripts-in-event-sheets.md` — inline scripts in event sheets
- `using-scripting/typescript-construct.md` — TypeScript setup and usage
- `using-scripting/debugging-script.md` — debugging techniques

### Key concepts to know without reading files

- `runtime` is the `IRuntime` instance — the entry point to everything. In event sheet scripts it's passed as a parameter; in script files it's the argument to `runOnStartup(runtime => { ... })`.
- Access object types via `runtime.objects.MyObjectName`. Call `.getFirstInstance()` or iterate with `instances()`.
- `IInstance` is the base for all objects. `IWorldInstance` extends it for objects that appear on-screen (x, y, angle, width, height, etc.).
- Behaviors are accessed via `instance.behaviors.BehaviorName` — e.g. `sprite.behaviors.Bullet.speed = 400`.
- Instance variables are at `instance.instVars.varName`.
- The tick loop: `pretick` → behaviors tick → `tick` → event sheets run → `tick2`. Use `runtime.dt` for delta-time.
- `async`/`await` is fully supported in event handlers; the runtime waits for async beforeprojectstart/afterprojectstart handlers to finish.
- In worker mode, `window` and `document` are unavailable — use `runtime` for input events instead.

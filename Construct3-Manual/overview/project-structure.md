---
title: "Project structure"
source: "https://www.construct.net/en/make-games/manuals/construct-3/overview/project-structure"
release: 476.3
---

## On this page

- [Layouts](#layouts)
- [Event Sheets](#event-sheets)
- [Object Types](#object-types)
- [System object](#system-object)
- [Sounds and Music](#sounds-and-music)
- [Timelines and eases](#timelines-and-eases)
- [Scripts](#scripts)
- [Project Files](#project-files)

---

Construct projects consist of the following elements. These can be accessed via the [Project Bar](https://www.construct.net/make-games/manuals/construct-3/interface/bars/project-bar), which contains a tree of all the elements in the project. Items in the Project Bar can also be organised in to subfolders  `[Paid plans only]`  which is very useful for medium to large projects. For more information, see the manual section on *Project primitives*.

## Layouts

Layouts are levels, menus, title screens and other pre-arranged *layouts* of objects. In other tools Layouts may be referred to as *scenes*, *rooms*, *frames* or *stages*. See the section on [Layouts](https://www.construct.net/make-games/manuals/construct-3/project-primitives/layouts) for more information.

Layouts also consist of multiple [Layers](https://www.construct.net/make-games/manuals/construct-3/project-primitives/layers), which can be used to arrange objects in to background and foreground layers. These are managed with the [Layers Bar](https://www.construct.net/make-games/manuals/construct-3/interface/bars/layers-bar).

## Event Sheets

Event Sheets are a list of [Events](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events) defining the game logic. In Construct, Events are the alternative to programming or scripting. Layouts have an associated [Event Sheet](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events/event-sheets) for their logic. Event sheets can be re-used between different layouts with [event sheet includes](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events/includes). Event sheets are edited in the [Event Sheet View](https://www.construct.net/make-games/manuals/construct-3/interface/event-sheet-view).

For more information on events, see the manual section on [Events](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events), especially the page on [How events work](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events/how-events-work).

## Object Types

An Object Type defines a 'class' of object. For example, *TrollEnemy* and *OgreEnemy* could be different object types. Multiple **instances** of an object type can be created. For example there could be three **instances** of the *TrollEnemy* **object type**, and five **instances** of the *OgreEnemy* **object type**.

It is important to be clear on the difference between **object types** and **instances**: they will be referred to as different things throughout the manual. For more information, see the manual entries for [Plugins](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/plugins), [Object Types](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/object-types) and [Instances](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/instances).

Object Types can also be grouped in to [Families](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/families)  `[Paid plans only]` .

## System object

The **System object** represents built-in functionality in Construct. It is the only object an empty project contains. It cannot be added again or removed from a project. There are no instances of the System object: it is simply always present and provides access to the built-in aspects of Construct's engine. Its conditions, actions and expressions are documented in the [System reference](https://www.construct.net/make-games/manuals/construct-3/system-reference). Note the System object does not appear in the Project Bar, but it is still an important part of the project.

## Sounds and Music

These are audio files used for sound effects and music in the game. **Sounds** should be used for short-duration sound effects that are played when events like collisions and explosions happen. **Music** should be used for the longer musical tracks. It is important to organise audio files appropriately, because Sounds are loaded completely before playing, but Music is streamed. This means if a Music track is accidentally put in the Sounds folder, it would have to completely loaded before it started playing. However, audio in the Music folder can start playing immediately since it is streamed. For more information see [Sounds & Music](https://www.construct.net/make-games/manuals/construct-3/project-primitives/sounds-and-music).

## Timelines and eases

[Timelines](../project-primitives/timelines.md) are pre-designed sequences of changes over time. They often cover movement, such as changing an object's position, angle and size over time, but can affect many other kinds of properties too. To learn more about creating timelines, see the section on the [Timeline Bar](../interface/bars/timeline-bar.md).

*Eases* are animation functions that determine how changes happen over time. There are a number of built-in eases in Construct, but custom ones can be designed in the editor too.

## Scripts

Construct also supports JavaScript and TypeScript coding in the editor. Event sheets can be combined with code, or code can be written in separate files. When using script files, they are added in the *Scripts* section of the Project Bar. For more information see the dedicated manual section on [Scripting](https://www.construct.net/make-games/manuals/construct-3/scripting/overview).

## Project Files

Additional files can be imported to or created in the project. These can then be loaded and used in your project. This also covers using a variety of media files in your project, such as videos and web fonts. For more information, see [Project Files](https://www.construct.net/make-games/manuals/construct-3/project-primitives/files). Construct also provides some [file editors](https://www.construct.net/make-games/manuals/construct-3/interface/file-editors)  `[Paid plans only]`  for conveniently editing data files.

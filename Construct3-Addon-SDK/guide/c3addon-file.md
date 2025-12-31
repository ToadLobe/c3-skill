---
title: "The .c3addon file"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/guide/c3addon-file"
---

# The .c3addon file

## On this page

- [Structure of a .c3addon file](#internalH1Link0)
- [Specifying metadata](#internalH1Link1)
- [Setting plugin information](#internalH1Link2)
- [Setting behavior information](#internalH1Link3)
- [Setting effect information](#internalH1Link4)
- [Defining actions, conditions and expressions](#internalH1Link5)

---

Construct 3 addons are distributed as a .c3addon file. This is simply a .zip file renamed to end with .c3addon. You can rename a .c3addon file to .zip and inspect its contents, or create a .c3addon file by zipping some files and renaming it.

> **Tip**  
> Make sure all the files are at the root level of the zip. If you accidentally place all files in a subfolder inside the zip, you'll get the error "missing addon.json" when trying to install it in Construct, because it expects to find that file at the root level.

## Structure of a .c3addon file

The files in a .c3addon for a plugin are arranged as follows. Note some features allow extra files to be added, but this is the minimal file structure for an empty plugin/behavior.

- **c3runtime/** — subfolder for Construct 3 runtime files.

- **lang/en-US.json** — language file containing strings shown in the user interface. This is kept in a separate file to facilitate translation.

- **aces.json** — JSON data file that defines actions, conditions and expressions.

- **addon.json** — JSON data file with metadata about the addon.

- **icon.svg** — addon icon.

- **plugin.js** or **behavior.js** — class representing the plugin or behavior.

- **type.js** — class representing an object type of the plugin, or behavior type of the behavior, in the editor.

- **instance.js** — class representing an instance of the plugin, or behavior instance of the behavior, in the editor.

## Specifying metadata

The basic metadata about your addon, such as its ID and type, is set in **addon.json**. See [Addon metadata](https://www.construct.net/make-games/manuals/addon-sdk/guide/addon-metadata) for more information.

## Setting plugin information

For plugins, the detailed information about the plugin and its capabilities is set in **plugin.js**. See [Configuring plugins](https://www.construct.net/make-games/manuals/addon-sdk/guide/configuring-plugins) for more information.

## Setting behavior information

For behaviors, the detailed information about the behavior and its capabilities is set in **behavior.js**. See [Configuring behaviors](https://www.construct.net/make-games/manuals/addon-sdk/guide/configuring-behaviors) for more information.

## Setting effect information

For effects, the detailed information about the effect and its capabilities is set using extra properties in **addon.json**. The effect itself is written in a **.fx** file. See [Configuring effects](https://www.construct.net/make-games/manuals/addon-sdk/guide/configuring-effects) for more information.

## Defining actions, conditions and expressions

To define your plugin or behavior's actions, conditions and expressions (ACEs), they must be specified in **aces.json** and the corresponding language strings added in **en-US.json**. (Currently the language file must be in US English, but the fact it is in a separate file will help facilitate translation in future.)

For more information see [Defining actions, conditions and expressions](https://www.construct.net/make-games/manuals/addon-sdk/guide/defining-aces).

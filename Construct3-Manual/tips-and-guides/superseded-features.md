---
title: "Superseded features"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/superseded-features"
release: 449
---

## On this page

- [Pin behavior](#pin-behavior)
- [Fade behavior](#fade-behavior)
- [Solid behavior tags](#solid-behavior-tags)
- [Z axis scale 'Normalized'](#z-axis-scale-normalized)
- [3D shape 'Z tiling factor'](#3d-shape-z-tiling-factor)
- [Deprecated features](#deprecated-features)

---

Construct has been in development for many years. Over time new features are occasionally introduced that supersede older features and essentially make them redundant. Sometimes in this case the older features are phased out and ultimately removed from Construct. For this case, see [Deprecated features](deprecated-features.md). However in some cases these features are left in Construct indefinitely for backwards compatibility reasons. For example the newer feature may not have exactly the same capabilities as the older feature and so cannot fully replace it in every possible usage scenario. Alternatively the older feature may have been around for such a long time that removing it would require updating vast amounts of documentation, including printed books, videos, third-party tutorials, lesson plans used in educational institutions, and so on, which is on the whole infeasible and so it's better to leave the older feature in.

Where older superseded features are left in, it's perfectly acceptable for existing projects, guides and so on to keep using them. However new projects should avoid using them in favor of the newer feature that supersedes them. Further, usually the older feature will not be supported to the same extent as the newer feature, such as fixing possible issues or adding new requested features, as we would instead recommend using the feature that supersedes it. In order to help Construct users know which features to prefer and avoid, this guide lists the features we consider superseded.

## Pin behavior

The [Pin behavior](../behavior-reference/pin.md) was widely used for many years, but it is almost completely superseded by the Hierarchies feature. The ['Add child' hierarchy action](../plugin-reference/common-features/common-actions#internalH1Link2.md) is similar to pinning the child on to the parent, but works more reliably when chains of objects are connected. Hierarchies can also be set up in the [Layout View](../interface/layout-view.md).

## Fade behavior

The [Fade behavior](../behavior-reference/fade.md) was widely used for many years, but is superseded by the [Tween behavior](../behavior-reference/tween.md). The Fade behavior essentially runs a pre-defined series of opacity tweens, which is now better done in a more general way with the Tween behavior.

## Solid behavior tags

A *Tags* property was added to the [Solid behavior](../behavior-reference/solid.md) prior to the introduction of the instance tags feature. Once instance tags were supported, the Solid behavior's own *Tags* property became redundant. However it is still supported for backwards compatibility reasons only. The default for newly added Solid behaviors is to have *Use instance tags* checked, meaning the Solid behavior will use the instance tags instead of its own tags, which is the recommended usage.

## Z axis scale 'Normalized'

Construct was originally a fully 2D engine. One of the first 3D features added was the ability to move 2D objects up and down the Z axis - a feature called "Z elevation" at the time. Originally this had the camera set up at a Z position of 100 regardless of the size of the viewport, so an object moved to a Z position of 50 was always half way to the camera. However this meant the Z axis worked on a different scale to the X and Y axes. This became a problem when adding further 3D features. For example in this mode, if you want to make a 3D shape object a cube, its size may need to be something like 120 x 120 x 15 rather than the more obvious 120 x 120 x 120. As Construct moves further in to 3D features this is increasingly becoming a problem.

In 2022 Construct added an option to set the Z axis scale to 'Regular', which fixed this problem. In 2025 the 'Regular' mode became the new default. Some new 3D features will require 'Regular' mode to work, and the old 'Normalized' mode does not really make sense to use any more; meanwhile its presence complicates the on-going development of Construct. Therefore the plan is to deprecate and ultimately remove 'Normalized' mode. However there remains a difficult backwards compatibility problem as there were a few years where all new projects were set to the 'Normalized' mode, and it is difficult to automatically update projects to the new mode. This means the retirement process will likely take a long time. As a first step, the 'Normalized' mode is being documented as a superseded feature to encourage people to manually switch their projects to 'Regular' mode.

## 3D shape 'Z tiling factor'

The 3D shape object can display a Tiled Background on one of its faces. The 'Z tiling factor' property existed to help adjust how the tiling appears on the Z axis to mitigate the different scale when using Z axis scale 'Normalized'. However as explained above, the Z axis scale 'Normalized' is to be retired in favor of 'Regular'. That therefore makes this property redundant - when using 'Regular' Z axis scale, this property should always be 1. In future once the Z axis scale 'Normalized' has been removed, this property will also be removed as it will have essentially been made redundant.

## Deprecated features

See also the section on [Deprecated features](deprecated-features.md), which covers features that will be completely removed in future (or have already been removed).

---
title: "Destroy Outside Layout behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/destroy-outside-layout"
---

# Destroy Outside Layout behavior
The **Destroy Outside Layout behavior** simply automatically destroys an object if it leaves the layout area. It only destroys the object if it is entirely outside the layout (i.e. no part of its bounding box is inside the layout). The Destroy Outside Layout behavior has no properties, conditions, actions or expressions.
This behavior is often useful to prevent bullets and other projectiles flying off the layout forever. For example, without this behavior, if the user shoots some enemies and misses, the bullets could carry on flying off outside the layout forever. As the game goes on, more and more bullets build up over time, all moving further away forever. This gradually uses up more and more memory and CPU power causing the game to slow down. This can easily be avoided by adding this behavior to the bullets, so they are automatically removed when they leave the layout area.

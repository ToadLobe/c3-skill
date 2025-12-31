---
title: "Flowcharts"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts"
---

# Flowcharts
[Flowcharts](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts/flowchart) allow you to arrange information in a tree like structure and establish logical connections between each [node](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts/flowchart-node) in the tree. Additionally each node can hold an arbitrary amount of information in the form of [outputs](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts/flowchart-node-output).
In the editor flowcharts are edited using the [Flowchart View](https://www.construct.net/en/make-games/manuals/construct-3/interface/flowchart-view). 
At runtime the [Flowchart Controller](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/flowchart-controller) plugin is used to query the current node of a flowchart for information, to navigate to different nodes and to react to changes in the state of the flowchart and have the application respond accordingly (e.g. moving from one node to the next one).

> **Tip**  
> Flowcharts themselves don't have any means to perform logic. Since [event sheets](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events/event-sheets) are already very good at managing logic, flowcharts are primarily meant as a tool to represent a tree structure in a way which makes it easier to understand the relationship between the nodes.

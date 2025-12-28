---
slug: a-path-finding
name: A* Path Finding
description: A* Pathfinder algorithm finds the shortest path between two cell (points)
images:
  - /projects/a-star-pathfinder/a_star_pathfinder.png
githubLink: https://github.com/ShUbHaM13M/A_Star_PathFinding-Algorithm.git
technologies:
  - label:
      - Python
    accentColor: '#ffdd6f'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Pygame
    accentColor: '#ffdd6f'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Algorithm
    accentColor: '#5180ba'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

### A* Path Finding

A* is a graph traversal and pathfinding algorithm.
It is widely used in Computer Science and Aritifical Intelligence.
It is designed to find the shortest path from a starting point to an end point in a graph, considering both the cost of reaching the goal and an estimated heuristic cost from the current node to the goal.  
The algorithm maintains a priority queue to explore nodes in order of their total estimated cost, which is the sum of the actual cost from the start to the current node (g-value) and the estimated cost from the current node to the goal (h-value). A\* selects nodes from the priority queue, explores their neighbors, and updates the cost estimates accordingly. The process continues until the goal is reached or the entire graph is explored.

This program is a visualization of the A\* algorithm in action on a 2d grid.
It uses pygame a game library for python which uses SDL APIs for screen and graphics.  
You can set a start point anywhere on the grid using `Shift + Left Mouse`  
and an end point using `CTRL + Left Mouse`  
using left mouse click without any modifier keys you can create walls  
right clicking on the wall removes them.  
And then press `Space` to start the visualization.

The Algorithm will find the shortest path after going through some iterations. It does not consider diagonal movements altought its not difficult to implement.

This is an old project made when i was first learning graphics programming using pygame.
it does not follow any conventions hence everything is in a single file. But the code is relatively easy to traverse and understand.

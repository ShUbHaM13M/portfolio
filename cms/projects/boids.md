---
slug: boids
name: Boids
description: Boid Simulation in rust and wasm
githubLink: https://github.com/ShUbHaM13M/boids
technologies:
  - label:
      - Rust
    accentColor: '#a72145'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - wasm
    accentColor: '#654ff0'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

<iframe
	style="border: none; border-radius: 12px; pointer-events: none"
  id="boid"
  title="Boid simulation running on web"
	height="400"
	allow="fullscreen"
  src="https://shubham13m.github.io/boids?bg-color=#0B192F&boid-color=#19D645">
</iframe>

**Boids** refers to a computer simulation that models the flocking behaviour of birds. It was developed in 1986 by Craig Reynolds. The term "boids" is derived from a combination of "bird" and "oid". The purpose of the simulation is to demonstrate how simple rules followed by individual entities can lead to complex and realistic-looking group behaviours.

In the boids simulation, each simulated boid, or bird, follows three basic rules:

1. Separation: Boids avoid crowding together and maintain a minimum distance from their neighbors to prevent collisions.
2. Alignment: Boids align their direction with the average direction of their neighbors, contributing to a cohesive group movement.
3. Cohesion: Boids move toward the average position of their neighbors, promoting group unity.

These three rules, when applied to a large number of individual entities, result in realistic flocking behaviour that mimics the movement of birds in nature. The boids simulation has been widely used in computer graphics, artificial intelligence, and game development to create life-like animations and behaviours for group of entities, not just limited to birds.

I will be writing a blog soon going over the implementation and how i compiled it to [wasm](https://webassembly.org/).  
For now here's the [Github link](https://github.com/ShUbHaM13M/boids)  
And a link to deployed version - [boids](https://shubham13m.github.io/boids?show-controls=true&bg-color=#0B192F&boid-color=#19D645)

References:  
[wikipedia](https://en.wikipedia.org/wiki/Boids)  
[vanhunderadams.com](https://vanhunteradams.com/Pico/Animal_Movement/Boids-algorithm.html)

Todos:

- [x] Add LICENSE
- [ ] Add Readme
- [ ] Blog about the implementation

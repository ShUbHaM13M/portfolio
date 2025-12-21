---
slug: pomidoras
name: Pomidoras
description: Pomidoras is a simple pomodoro timer application built using the Raylib library and Clay Layout library.
images:
  - /projects/pomidoras/pomidoras.png
  - /projects/pomidoras/pomidoras-short-break.png
  - /projects/pomidoras/pomidoras-long-break.png
  - /projects/pomidoras/pomidoras-config.png
githubLink: https://github.com/ShUbHaM13M/Pomidoras.git
technologies:
  - label:
      - C
    textColor: '#FFFFFF'
    accentColor: '#004283'
    fieldGroup: customTag
  - label:
      - Raylib
    accentColor: '#F5F5F5'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Clay
    accentColor: '#A8421C'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

**Pomidoras** is a lightweight Pomodoro timer application implemented in C, built with the Raylib graphics library and the Clay Layout library for UI layout. It provides a clean, focused interface for managing work and break intervals using the Pomodoro Technique.

## What it does
  - Start, pause, and skip Pomodoro work sessions and short/long breaks.
  - Audible/visual notification when a session completes.
  - Simple settings to adjust durations for work, short break, and long break.
  - Minimal, distraction-free UI optimized for quick task cycles.
  
## Why I built it
  - To create a compact desktop timer focused on performance and simplicity.
  - To learn Raylib for graphics and Clay for declarative layout in C.

## Implementation highlights
  - Event loop: Single-threaded main loop using Raylib for frame updates and input polling; timers implemented with high-resolution time functions to keep timing accurate even when rendering load varies.
  - UI structure: Clay Layout manages containers and spacing, enabling responsive placement of controls and timer visuals with minimal layout code.
  - State management: Small state machine tracks modes (Work, Short Break, Long Break), session counts, and paused/running state to determine transitions and long-break scheduling.
  - Audio/notifications: Short beep or system notification on session end using Raylib audio playback; and platform-specific notifications.
  - Configuration persistence: User settings are persisted in Pomidoras’ own simple settings format, so preferences (durations, theme) are saved across sessions.
  - Cross-compilation: Project is set up to cross-compile to Windows using MinGW, enabling easy generation of Windows binaries from Linux/macOS build environments.

## Project structure 

pomidoras/  
├── src/  
│   ├── main.c  
│   ├── platform_notification.c  
│   ├── pomidorash.h  
│   ├── resources/  
│   └── screens/   
├── Makefile  
├── include/  
└── README.md

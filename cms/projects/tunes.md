---
slug: tunes
name: Tunes - Music player
description: Tunes a music player app made with Flutter
images:
  - /projects/tunes/tunes_home.png
githubLink: https://github.com/ShUbHaM13M/Tunes-music-player
technologies:
  - label:
      - Flutter
    accentColor: '#0468d7'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Design
    accentColor: '#F44F1F'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

## Tunes - Music Player

Tunes is a music player app made using [Flutter](https://flutter.dev).

It allows you to browse, play, pause, shuffle and loop music stored locally on your device.  
This project was created to learn flutter when it was first released and compare it with existing tool that I used at the time for multi-platform app development - [React Native](https://reactnative.dev).

It uses the following packages :-  
[on_audio_query](https://pub.dev/packages/on_audio_query): To query audios/songs metdata from device storage.  
[just_audio](https://pub.dev/packages/on_audio_query): A feature rich audio player supporting multiple platforms.  
[shared_preferences](https://pub.dev/packages/shared_preferences): To store user preferences locally.

The design of Tunes is also inspired by the then design trend _Glassmorphism_. During the time of development of Tunes there was not an easy way to achieve glassmorphic effects in React Native, since it uses native device element as opposed to Flutter which uses a canvas to render things on the screen.

Instead of relying on the platform's native widgets, Flutter has its own set of widgets and a custom rendering engine.

[Flutter architectural overview](https://docs.flutter.dev/resources/architectural-overview) shows the high-level overview of architecture of Flutter.

But in short, Flutter uses the Skia graphics engine to perform the actual painting on the screen. Skia is a 2D graphics library that provides a set of low-level drawing primitives. Flutter uses Skia to draw the graphics for each render object onto the screen. This allows us to add filter or other decoration to any element during rendering.

In order to achieve the glass effect on a widget, I created a custom stateless widget that wraps child in a container with the glass effect.
Here's a small snippet of dart code that shows how it works -

```dart
~filename /lib/widgets/glass.dart
import 'dart:ui';
import 'package:flutter/material.dart';

class Glass extends StatelessWidget {
  final Widget child;
  final double blurAmount;
  final Color backgroundColor;

  const Glass({
    key? key,
    required this.child,
    this.blurAmount = 14,
    this.backgroundColor = Colors.black,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: blurAmount, sigmaY: blurAmount),
        child: child,
      )
    )
  }
}
```

The project is open source. I haven't maintained it since a long time. And since this was my first flutter project the way the code is structured might not be the most scalable and efficient. But still I use this app from time to time to listen to music on my phone.

TODOs:

- [ ] Put links to android build apks.
- [ ] Can't build for iOS

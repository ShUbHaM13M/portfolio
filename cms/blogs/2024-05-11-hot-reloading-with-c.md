---
slug: hot-reloading-with-c
title: Hot Reloading with C
excerpt: Learn how to add hot reloading in a C project
coverImage: /blogs/hot-reloading-with-c/cover.png
coverImageAlt: Vim Navitation Basics cover
showImage: true
date: 2024-05-11
updated: null
hidden: false
tags:
  - label:
      - C
    textColor: '#FFFFFF'
    accentColor: '#004283'
    fieldGroup: customTag
categories:
  - Dev
type: Blog
---

Hot reloading refers to the process of updating code or resources in a running application without requiring a full restart. This is particularly useful during development or in situations where continuous uptime is crucial.  
It allows developers to make changes to their code or assets (such as images, config files) while the application is running, and see those changes reflected immediately without having to restart the application.

When we think of hot reloading we usually think of a dynamic, interpreted programming language like JavaScript or Python.  
But we can also achieve hot reloading in C using **Dynamic Link Libraries (DLLs)**

Dynamic Link Libraries (DLLs) are commonly to provide reusable code that can be shared across multiple applications. One of the advantages of DLLs is their ability to be dynamically loaded and unloaded by programs, which enables features like hot reloading.

Here's how hot reloading typically works:

- Trigger: A trigger is something that causes the reload. It can be a key-event or changes in a file.
- Pre-Reload: It is used to store the state before the reloading.
- Post-Reload: Post-reload is called after the reload.

Let's implement this in C
Starting with a `main.c` file let's write a basic hello world program.

```c
~filename main.c
#include <stdio.h>

int main (void)
{
  printf("Hello World\n");
  return 0;
}
```

Now we can start implementing module which consists of two files:

- module.h - declarations which will be included in the main file
- module.c - definitions of the functions defined in module.h header file

```c
~filename module.h
#ifndef MODULE_H_
#define MODULE_H_

void (*module_init)(void) = NULL;
void *(*module_pre_reload)(void) = NULL;
void (*module_post_reload)(*void) = NULL;
void (*module_update)(void) = NULL;

#endif // MODULE_H_
```

Lots of `void` in this file but we are just declaring the function signature as pointer so that it can be included in the `main.c` file.

Now let's define these functions in `module.c` file.

```c
~filename module.c
#include <stdlib.h>
#include <string.h>
#include <assert.h>

// Defining a struct state that has to be persisted
typedef struct {
  char *name;
} State;

// Declaring a static state variable
static State *state = NULL;

void module_init (void)
{
  // Allocating memory for storing state on heap
  state = malloc(sizeof(*state));
  assert(state != NULL);
  memset(state, 0, sizeof(*state));

  // Setting initial value of state
  state->name = "Shubham";
}

void *module_pre_reload (void) { return state; }

void module_post_reload (void *previous_state) { state = previous_state; }

void module_update (void) {
  printf("Hello %s\n", state->name);
}

```

Now I will be creating a simple shell file for compiling these files

```sh
~filename build.sh
#!/bin/bash

# For compiling the module as .so
clang -Wall -Wextra -ggdb -fPIC -shared -o libmodule.so module.c

# For compiling the main program
clang -Wall -Wextra -ggdb -o main main.c
```

The `-fPIC` and `-shared` options are used with clang to generate position-independent code (PIC) and create a shared object library (.so)

Executing this script in shell will compile and generate libmodule.so file (Same as DLL on Windows)

Next we include the `module.h` file in `main.c` and setup to use the libmodule.so file.

```c
~filename main.c

// The dlfcn.h contains function to interact with Dynamic linking library
#include <dlfcn.h>
// Including the header file
#include "module.h"

// Path to the generated libmodule.so file
const char* libmodule_path = "./libmodule.so";
// Pointer for storing the module
void *libmodule = NULL;

bool initialize_libmodule (void)
{
  if (libmodule != NULL) {
    dlclose(libmodule);
  }

  // Opening the dynamic source object
  libmodule = dlopen(libmodule_path, RTLD_NOW);

  if (libmodule == NULL)
    return false;

  // Using the dlsym function which returns the address where the
  // symbol (function in this case) is stored in memory
  module_init = dlsym(libmodule, "module_init");
  if (module_init == NULL)
    return false;

  module_pre_reload = dlsym(libmodule, "module_pre_reload");
  if (module_pre_reload == NULL)
    return false;

  module_post_reload = dlsym(libmodule, "module_post_reload");
  if (module_post_reload == NULL)
    return false;

  module_update = dlsym(libmodule, "module_update");
  if (module_update == NULL)
    return false;

  return true;
}

void reload_libmodule (void)
{
  void *previous_state = module_pre_reload();
  initialize_libmodule();
  module_post_reload(previous_state);
}

int main (void)
{
  if (!initialize_libmodule()) {
    fprintf(stderr, "Error: %s\n", dlerror());
    return 1;
  }

  module_init();
  char ch;
  while (1) {
    printf("Press 'q' to quit");
    scanf("%c", &ch);

    if (ch == 'q') break;

    // Using keypress 'r' to trigger a reload
    if (ch == 'r') {
      reload_libmodule()
    }

    module_update();
  }
}
```

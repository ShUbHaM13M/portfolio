---
slug: tic-tac-toe
name: Tic-Tac-Toe
description: Multiplayer Tic-Tac-Toe with Svelte, Koa, Socket.io
githubLink: https://www.github.com/ShUbHaM13M/tic-tac-toe
technologies:
  - label:
      - Svelte
    accentColor: '#f96743'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Socket.io
    accentColor: '#25c2a0'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - KoaJs
    accentColor: '#33333D'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
images:
  - /projects/tic-tac-toe/cover.png
---

### Tic-Tac-Toe

A Tic-Tac-Toe multiplayer game made using **Svelte** for the frontend and **Koa**, **Socket.io** for the backend.

The Svelte frontend is used for creating/joining a room.

![Creating a new room](/projects/tic-tac-toe/create-room.png 'Creating a new room.')

User can join a room or if the room does not exists a new room will be created.  
The user will than be taken to a waiting area or lobby where the server will wait for another player to join in the same room.

![Lobby](/projects/tic-tac-toe/room-connected.png 'Lobby, waiting for another player to join the room.')

Once two players are joined in the same the game will begin after a countdown and the users will be taken to the tic-tac-toe board.

![Game room](/projects/tic-tac-toe/game-room.png 'Game room.')

Here the user can play the game during their turn and wait for the opponent's turn.  
The player who hosted the room is _X_ and the player who joined the room is _O_.  
User turns are highlighted for the opponent when they hover on a particular cell of the board.

Once there are no more moves left or a user wins the game. The game will be over and input to the board is also disabled.

![X wins the game](/projects/tic-tac-toe/game-over.png 'Player 1 (X) won the game')

All the realtime communication such as room creation, joining, player moves and winning/losing are handled by socket.io events and there are no REST APIs used for communication.
Many rooms can be created simultaneously, but only 2 players can be in a room together and play the game (Its a two player game..)

Initially I only wanted to work on the game without any multiplayer functionality, but later decided to extend it further and introduce a system of rooms and realtime connectivity.

**TODOs**

- [ ] An action to restart the game when the game is over
- [ ] Display the user details and win-lose in the UI
- [ ] Allowing users to make a room public or private during the creation of room.
- [ ] Listing public rooms on the homepage so anyone can join the room if there are less than 2 players.

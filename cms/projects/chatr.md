---
slug: chatr
name: Chatr. - Chat App
description: Chatr. is a PWA made using Reactjs with Snowpack, TailwindCSS. The backend is made using Nodejs - Express, MongoDb and Socket.io The users can connect with any other user either by the username or the user_id. The email of the registered users are also verified.
images:
  - /projects/chatr/chatr_chat_screen.jpg
  - /projects/chatr/chatr_login_screen.jpg
  - /projects/chatr/chatr_add_contact_screen.jpg
githubLink: https://github.com/ShUbHaM13M/Chatr
technologies:
  - label:
      - React
    accentColor: '#087EA4'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - TailwindCSS
    accentColor: '#38BDF8'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - MongoDb
    accentColor: '#199555'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Socket.io
    accentColor: '#25c2a0'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

### Chatr - Chat App

Chatr is a chat app made with Reactjs, TailwindCSS and Socket.io

It has an express server that uses socket.io to connect and interact with the users
Users can use an their Facebook, Google account to register which uses Passportjs and OAuth
or they can use an Email account to register which sends an email containing a verification link using nodemailer to verify the user. The user data and chat history is stored in a mongoDb instance

The user can then add contacts by adding the unique id of other user
or sharing the user id to other users.
Once both users add each other they will show up in each other's contact list and their online status.
The users can then chat in a private chatroom.  
The updates in the chat room such as user typing or sending, recieving messages are real-time since they are both connected to the same room using socket. This approach is very scalable as using this approach we can have a room with not just two users but multiple users creating a group.
Since the user data and chat history is stored in a mongoDb instance, thery are persisted across user sessions.

Chatr is a [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) which means it can be installed on the device like an app and will show up at homescreen. One of the things that I would like to implement is a notification feature, so when the user receives a message a notification will be sent if the user is not active.  
In order to achieve this I think something like the [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) can be used.

The active status of the user is tracked when the user opens the PWA or visits the website. The following code does the job to do so -

```javascript
~filename /controller/socket.js
// Initializing socket
const io = socket(server, { cors });
// Listening to active socket connections
io.on('connection', async (socket) => {
	// ---
	// Authorization of connected socket and getting the id

	socket.join(id);
	// Getting user from mongoDb database
	const user = await getUserById(id);
	user.isActive = true; // setting user's active state to true
	user.save();
	sendUserStatusChange(user, true); // Sending a socket event to all the users
});

async function sendUserStatusChange(user, state) {
	const contacts = await getAllContacts(user);
	for (const contact of contacts) {
		socket.broadcast.to(contact._id.toString()).emit('state-changed', {
			user_id: user._id,
			state
		});
	}
}
```

The `'state-changed'` event is then listened on the client side and it renders the state accordingly.

Chatr uses somewhat of an MVC pattern. It does not uses ejs templates for html, but instead uses React.js for user pages.
The _/web_ folder is another project which was bootstrapped using [Snowpack](https://www.snowpack.dev/) - a lightning fast frontend build tool which is not maintained anymore. It was a thing before vite but it much was faster and better than webpack.  
If I start working on this project again I will probably change the build tool to vite.

> The backend of this website was hosted on a hobby account of heroku and does not work anymore. But you can still clone the project and use it in anyways.

import express from 'express';
import mysql from 'mysql';

import user from './src/Api/user.js';
import chat from './src/Api/chat.js';
import message from './src/Api/message.js';

/** Init express */
const app = express()
const port = 2509;

/** Init the database connection */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lukiju18",
  database: "localareachat",
});

const userController = new user(connection);
const chatController = new chat(connection);
const messageController = new message(connection);

/** ALLOWING CROOS ORIGIGN REQUESTS */
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/** Request Handlers */
app.get('/', (req, res) => res.send("Hello, World!"));

/** ############# USER ############# */
/** create new user */
app.get('/create_user/:name/:password', (req, res) => userController.createNewUser(req, res));

/** login user */
app.get('/login/:name/:password', (req, res) => userController.authenticateUser(req, res));

/** ############# Chats ############# */
/** gets all the chats / users that the user can chat with */
app.get('/get_all_chats', (req, res) => chatController.getAllChats(req, res));

/** gets a single chat including all the messages */
app.get('/get_chat/:from/:to', (req, res) => chatController.getChat(req, res));

/** ############# Messages ############# */
/** creates a single message */
app.get('/create_message/:from/:to/:message', (req, res) => messageController.createMessage(req, res));

app.listen(port);
console.log(`Server started on port ${port}`);


/** Current Problems:
 * you could request all the chats without being logged in
 * sql injection
 */
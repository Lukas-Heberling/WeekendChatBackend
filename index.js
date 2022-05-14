import express from 'express';
import mysql from 'mysql';

import user from './src/Api/user.js';

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

/** ALLOWING CROOS ORIGIGN REQUESTS */
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/** Request Handlers */
app.get('/', (req, res) => res.send("Hello, World!"));

/** Create User */
app.get('/create_user/:name/:password', (req, res) => userController.createNewUser(req, res));

app.listen(port);
console.log(`Server started on port ${port}`);
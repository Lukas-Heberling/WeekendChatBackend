import express from 'express';

/** Init express */
const app = express()
const port = 2509;

/** ALLOWING CROOS ORIGIGN REQUESTS */
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/** Request Handlers */
app.get('/', (req, res) => res.send("Hello, World!"));

app.listen(port);
console.log(`Server started on port ${port}`);
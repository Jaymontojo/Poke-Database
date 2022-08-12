const express = require('express');
const path = require('path');
const {createUserWithEmailAndPassword} = require('firebase/auth');
const { auth } = require('../firebase/config.js');

function setupServer () {
  const app = express();
  app.use(express.json());

  app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.post('/api/auth/register', async(req, res) => {
    const {email, password} = req.body
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    //console.log(newUser);
    res.json({"payload": newUser}).status(200);
  })
  app.get('/api/hello', (req, res) => {
    res.json({message:"Hello from server!"});
  });

  return app;
}
module.exports = setupServer;
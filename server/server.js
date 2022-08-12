const express = require('express');
const path = require('path');
const authController = require('./controllers/authController');

function setupServer () {
  const app = express();
  app.use(express.json());

  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.use('/api/auth', authController);

  app.get('/api/hello', (req, res) => {
    res.json({message:"Hello from server!"});
  });

  return app;
}
module.exports = setupServer;
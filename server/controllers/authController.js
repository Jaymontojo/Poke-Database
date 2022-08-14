const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth');

router.post('/register', async(req, res) => {
  const {email, password} = req.body
  const userCredentials = await Auth.register(email, password);
  res.json({"payload": userCredentials}).status(200);
})

router.post('/signin', async(req, res) => {
  const {email, password} = req.body
  const userCredentials = await Auth.signin(email, password);
  res.json({"payload": userCredentials}).status(200);
})

module.exports = router;

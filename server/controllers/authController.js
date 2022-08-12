const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth');

router.post('/register', async(req, res) => {
  const {email, password} = req.body
  const newUser = await Auth.register(email, password);
  res.json({"payload": newUser}).status(200);
})

module.exports = router;

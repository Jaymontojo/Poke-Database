const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');

router.get('/', async (req, res)=> {
  const pokemon = await Pokemon.findMany();
  res.send(pokemon)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  const { name } = req.params;
  const pokemon = await Pokemon.findOne(name);
  res.send(pokemon[0]).status(200);
});

router.post('/', async(req, res) => {
  const {name} = req.body;
  await Pokemon.create(name);
  res.status(201).end();
});

router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const edits = req.body;
  await Pokemon.update(name, edits);
  res.status(204).end();
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  await Pokemon.delete(name);
  res.status(204).end();
});

module.exports = router;

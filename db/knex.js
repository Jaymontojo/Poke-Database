const knex = require('knex');
require('dotenv').config();
const config = require('../knexfile');

//console.log(process.env.PORT ? config.development : config.production)
module.exports = knex(process.env.PORT ? config.production : config.development);


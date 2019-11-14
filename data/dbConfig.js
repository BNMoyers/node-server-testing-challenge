//imports and dependencies
const knex = require('knex');
const config = require('../knexfile.js');

//environment setter
const environment = process.env.DB_ENV || 'development'

//exports
module.exports = knex(config[environment]);
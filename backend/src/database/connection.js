const knex = require('knex');
const configuration = require('../../knexfile.js');

const connetion = knex(configuration.development);


module.exports = connetion
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(connection.development);

module.exports = connection;
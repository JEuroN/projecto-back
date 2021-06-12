const pgp = require('pg-promise')({});
const dbConfig = require('../config/db.config');
const db = pgp(dbConfig);

const pg = {};

pg.db = db;
pg.pgp = pgp;

module.exports = pg;
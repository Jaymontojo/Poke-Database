require('dotenv').config();

module.exports = {
  client: 'pg',
  connection:
    process.env.DATABASE_URL ||
    process.env.DB_URL_LOCAL,
  searchPath: 'public',
  migrations : {
    tableName: 'knex_migrations',
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  }
}
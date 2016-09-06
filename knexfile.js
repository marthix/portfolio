module.exports = {
  client: 'pg',
  connection: (process.env.DATABASE_URL || 'postgres://localhost/portfolio'),
  searchPath: 'knex,public'
}

// Update with your config settings.

module.exports = {

  development: {
		client: 'sqlite3',
		connection: { filename: './database/medCabUsers.db3' },
		useNullAsDefault: true,
		migrations: {
			directory: './database',
			tableName: 'dbmigrations',
		},
    seeds: { directory: './database/seeds' }
  }
};
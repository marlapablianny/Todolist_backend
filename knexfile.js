// Update with your config settings.
require('dotenv').config();


module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'tarefas',
    }
  },
  seeds: {
    directory: '/seeds',
  }

};

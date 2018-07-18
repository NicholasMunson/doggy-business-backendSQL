module.exports = {

  development: { 
    client: 'pg',
    connection:'postgres:///doggy-business'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }

};

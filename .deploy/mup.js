module.exports = {
  servers: {
    one: {
      host: 'a.yeah-hbg.com',
      username: 'root',
      password: '',
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'yeah',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://yeah-hgb.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};

const { Sequelize } = require('sequelize');

const db = new Sequelize({
  username: "root",
  password: "177013",
  database: "my_shop",
  host: "localhost",
  port: 3306,
  dialect: "mysql", 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

// const sequelize = new Sequelize('mysql://root:177013@localhost:3306/my_shop', {
//   logging: false
// })

module.exports = db;
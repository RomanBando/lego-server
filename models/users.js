const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("users", {
  user_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: DataTypes.STRING(20),
  last_name: DataTypes.STRING(20),
  email: DataTypes.STRING(50),
  password: DataTypes.STRING(20),
  picture: DataTypes.STRING(100)
}, {
  tableName: "users",
  freezeTableName: true,
  timestamps: false
});

module.exports = Users;
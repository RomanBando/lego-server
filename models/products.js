const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Products = sequelize.define("products", {
  product_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  num_of_pieces: DataTypes.INTEGER,
  units_in_stock: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  },
  main_picture: DataTypes.STRING,
  description: DataTypes.STRING(1500)
}, {
  tableName: "products",
  freezeTableName: true,
  timestamps: false
});

module.exports = Products;
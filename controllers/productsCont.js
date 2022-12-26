const Products = require('../models/products.js');

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await Products.findAll();
      res.status(201).send(products);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  async getTopProducts(req, res) {
    const setLimit = Number(req.query.limit);
    try {
      const products = await Products.findAll({limit: setLimit});
      res.status(201).send(products);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
}
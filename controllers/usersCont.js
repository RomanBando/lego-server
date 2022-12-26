const Users = require('../models/users.js');
const { Op } = require('sequelize');

module.exports = {
  async addUser(req, res) {
    try {
      const isEmail = await Users.findOne({
        where: {
          email: req.body.email
        }
      });
      if (!isEmail) {
        const user = await Users.create({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        })
        res.cookie('email', req.body.email, { signed: true, maxAge: 3600000, httpOnly: true  });
        res.status(201).send(user);
      } else {
        res.status(403).send('User already exists');
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }, 
  async findUser(req, res) {
    try {
      const {email} = req.signedCookies;
      if (!email) {
        return res.status(401).end();
      }

      const user = await Users.findOne({
        where: {
          email
        }
      });

      res.status(user ? 200 : 404).send(user);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async checkUser(req, res) {
    try {
      const user = await Users.findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      });
      if (!user) {
        return res.status(401).end();
      } 
      res.cookie('email', req.body.email, { signed: true, maxAge: 3600000, httpOnly: true });
      res.status(201).send(user);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }, 
  async logOut(req, res) {
    res.clearCookie('email').end();
  }
}
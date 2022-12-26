const bodyParser = require('body-parser');
const express = require('express');
const app = express(); 
const morgan =require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require("./db.js");
const productsController = require('./controllers/productsCont.js');
const usersController = require('./controllers/usersCont.js');
const PORT = 4100;

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser('pokakal'));

app.get('/api/products', productsController.getAllProducts);

app.get('/api/products/top', productsController.getTopProducts);

app.post('/api/users/signup', usersController.addUser);

app.post('/api/users/signin', usersController.checkUser);

app.get('/api/users/profile', usersController.findUser);

app.get('/api/users/logout', usersController.logOut);

app.listen(PORT);
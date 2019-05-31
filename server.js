const express = require('express');

const dishesRouter = require('./dishes/dishes-router')
const recipesRouter = require("./recipes/recipes-router")

const server = express();

server.use(express.json());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

module.exports = server;
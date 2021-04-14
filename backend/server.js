require('dotenv').config();

const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(process.env.PORT, () =>
  console.log(`Server start on port ${process.env.PORT}`)
);

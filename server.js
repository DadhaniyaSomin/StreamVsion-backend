const express = require('express');
require('dotenv').config();
const app = express();
const port = 3010;
const path = require('path');
const router = require('./routes');

app.use(router);
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Hello From Stram  Vison');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);

module.exports = app;

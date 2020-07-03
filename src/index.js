const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.json({
      message: 'You have reached index.js of the Person App',
    });
  });

const port = process.env.PORT || 1111;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
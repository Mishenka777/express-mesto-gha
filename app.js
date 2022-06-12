const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
mongoose.connect('mongodb://localhost:27017/mestodb');
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '62a2a3f0c6ec7c20d9bc01f9',
  };
  next();
});
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use((req, res) => {
  res.status(404).send({ message: 'Страница не найдена' });
});
app.listen(PORT);

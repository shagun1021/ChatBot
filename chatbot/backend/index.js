const express = require('express');
const app = express();
const mongo = require('mongoose');
app.use(express.json());
const postRoute = require('./routes/newMsg')
const cors = require('cors');

app.use(cors());
app.use(postRoute)


mongo.connect('mongodb://localhost:27017/bot').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

app.listen(9999, () => {
  console.log('Server is connected on port 9999');
});

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const ApiData = require('./controllers/artDataApi')
const crud = require('./controllers/crudFunction')
app.use(cors());
app.use(express.json());
require('dotenv').config();

const PORT = process.env.PORT || 3070

mongoose.connect('mongodb://localhost:27017/401exam',
  { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', function (req, res) {
  res.send('its work ')
})

// get the data from api
app.get('/art', ApiData)

app.post('/art/favorite', crud.postFunction)
app.get('/art/favorite', crud.getFunction)
app.put('/art/favorite/:slug', crud.putFunction)
app.delete('/art/favorite/:slug', crud.deleteFunction)





app.listen(PORT, () => {
  console.log('the server started at ', PORT);
})

const cool = require('cool-ascii-faces')
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3333

const app = express();

const MONGO_URL = "mongodb+srv://admin:admin@cluster0-0ljsi.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '...', 'uploads')))
app.use(routes);




// req.query = Acessar query params (para filtros)
// req.params = Aceesar route params
//req.body = Acessar corpo da requisição
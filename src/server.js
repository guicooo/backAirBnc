const cool = require('cool-ascii-faces')
const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const cors = require("cors");
const routes = require('./routes');
const PORT = process.env.PORT || 5000

const app = express();

const MONGO_URL = "mongodb+srv://admin:admin@cluster0-0ljsi.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//  });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

express()
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



app.use(cors());
app.use(express.json());
app.use(routes);




// req.query = Acessar query params (para filtros)
// req.params = Aceesar route params
//req.body = Acessar corpo da requisição
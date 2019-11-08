const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const routes = require('./src/routes');

const app = express();

const uri = "mongodb+srv://admin:admin@cluster0-0ljsi.azure.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//  });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);


app.listen(3333);


// req.query = Acessar query params (para filtros)
// req.params = Aceesar route params
//req.body = Acessar corpo da requisição
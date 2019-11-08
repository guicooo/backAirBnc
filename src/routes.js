const express = require('express');
const routes = express.Router();
const sessionController = require('./controllers/SessionController');


routes.post('/sessions', sessionController.store)

module.exports = routes;


const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const TripController = require('./controllers/TripController');
const ItemController = require('./controllers/ItemController');
const ReportController = require('./controllers/ReportController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/trips', TripController.index);
routes.post('/users/:user_id/trips', TripController.store);

routes.get('/users/:user_id/trips/:trip_id/items', ItemController.index);
routes.post('/users/:user_id/trips/:trip_id/items', ItemController.store);
routes.delete('/users/:user_id/trips/:trip_id/items', ItemController.delete);

routes.get('/users/:user_id/report', ReportController.show);

module.exports = routes;

 


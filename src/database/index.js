const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Trip = require('../models/Trip');
const Item = require('../models/Item');
const Trip_Item = require('../models/Trip_Item');

const connection = new Sequelize(dbConfig);

User.init(connection);
Trip.init(connection);
Item.init(connection);
Trip_Item.init(connection);

User.associate(connection.models);
Trip.associate(connection.models);
Item.associate(connection.models);
Trip_Item.associate(connection.models);

module.exports = connection;
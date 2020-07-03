const { Model, DataTypes } = require('sequelize');

const Item = require('../models/Item');
const Trip = require('../models/Trip');

class Trip_Item extends Model {
  static init(sequelize) {
    super.init({
      trip_id: DataTypes.STRING,
      item_id: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'trip_items',
    })
  }

  static associate(models) {
    Trip.belongsToMany(models.Item, { through: 'trip_items', as: 'items' });
    Item.belongsToMany(models.Trip, { through: 'trip_items', as: 'trips' });
  }
}

module.exports = Trip_Item;
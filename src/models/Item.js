const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    //this.belongsToMany(models.Trip, { foreignKey: 'trip_id', through: 'trip_items' ,as: 'trips'});
  }
}

module.exports = Item;
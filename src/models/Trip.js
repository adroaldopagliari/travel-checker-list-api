const { Model, DataTypes } = require('sequelize');

class Trip extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    //this.belongsToMany(models.Item, { foreignKey: 'item_id', through: 'trip_items', as: 'items' });
  }
}

module.exports = Trip;
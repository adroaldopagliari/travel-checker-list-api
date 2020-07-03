const Item = require('../models/Item');
const User = require('../models/User');
const Trip = require('../models/Trip');
const Trip_Item = require('../models/Trip_Item');

module.exports = {
  async index(req, res) {
    const { trip_id } = req.params;

    const trip = await Trip.findByPk(trip_id, {
      include: { association: 'items', through: { attributes: ['quantity'] } }
    });

    return res.json(trip.items);
  },

  async store(req, res) {
    const { user_id, trip_id } = req.params;
    const { name, description, quantity } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const trip = await Trip.findByPk(trip_id);

    if (!trip) {
      return res.status(400).json({ error: 'Trip not found.' });
    }

    const [item] = await Item.findOrCreate({
      where: { name, description }
    });

    const item_id = item.getDataValue('id');

    await Trip_Item.create({
      trip_id,
      item_id,
      quantity,
    })

    return res.json(item);
  },

  async delete(req, res) {
    const { user_id, trip_id } = req.params;
    const { name, description } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const trip = await Trip.findByPk(trip_id);

    if (!trip) {
      return res.status(400).json({ error: 'Trip not found.' });
    }

    const item = await Item.findOne({
      where: { name, description }
    });

    await trip.removeItem(item);

    return res.json();
  }
}
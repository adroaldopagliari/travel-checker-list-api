const User = require('../models/User');
const Trip = require('../models/Trip');
const { index } = require('./UserController');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'trips' }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name, description } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const trip = await Trip.create({
      name,
      description,
      user_id
    });

    return res.json(trip);
  }
}
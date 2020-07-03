const Trip = require('../models/Trip');

module.exports = {
  async show(req, res) {
    //recuperar todas as trips de um determinado usuário 
    //com seus respectivos items.
    const { user_id } = req.params;

    const trips = await Trip.findAll({
      attributes: ['name', 'description'],
      where: { user_id },
      include: [
        { association: 'items', through: { attributes: ['quantity'] } }
      ]
    });

    return res.json(trips);
  }
}
const Solicitation = require('../sequelize/entities/Solicitation');

module.exports = {
  async store(request, response) {
    const date = new Date();

    const { user_id } = request.params;

    try {
      const solicitation = await Solicitation.create({
        date,
        user_id,
      });

      return response.json(solicitation);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },

  async index(request, response) {
    try {
      const solicitations = await Solicitation.findAll({
        include: { association: 'buyer' },
      });


      return response.json(solicitations);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
};

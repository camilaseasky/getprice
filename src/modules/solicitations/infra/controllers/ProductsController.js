const { Op } = require('sequelize');


const Solicitation = require('../sequelize/entities/Solicitation');
const Product = require('../sequelize/entities/Product');

module.exports = {
  async store(request, response) {
    const { solicitation_id } = request.params;
    const { description } = request.body;

    const solicitation = await Solicitation.findByPk(solicitation_id);

    if (!solicitation) {
      return response.status(400).json({ message: 'Solicitation not found' });
    }

    // busca o produto pela descrição
    const [product] = await Product.findOrCreate({
      where: { description },
    });

    await solicitation.addProduct(product);

    return response.json(product);
  },

  async delete(request, response) {
    const { solicitation_id } = request.params;
    const { description } = request.body;

    const solicitation = await Solicitation.findByPk(solicitation_id);

    if (!solicitation) {
      return response.status(400).json({ message: 'Solicitation not found' });
    }

    const product = await Product.findOne({
      where: { description },
    });

    await solicitation.removeProduct(product);

    return response.json();
  },


  async index(request, response) {
    // const { solicitation_id } = request.params;
    const today = new Date(2020, 4, 31);


    const solicitations = await Solicitation.findAll(
      {
        attributes: ['id', 'date'],
        where: {
          date: {
            [Op.lt]: today,
          },
        },
        include: [
          {
            association: 'products',
            through: { attributes: [] },
            required: true,
            attributes: ['description'],
          },
        ],
      },
    );


    if (!solicitations) {
      return response.status(400).json({ message: 'Solicitation not found' });
    }

    return response.json(solicitations);
  },
};

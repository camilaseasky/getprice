const User = require('../sequelize/entities/User');

module.exports = {
  async store(request, response) {
    const {
      name,
      email,
      password,
      profile,
    } = request.body;

    try {
      const user = await User.create({
        name,
        email,
        password,
        profile,
      });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
};

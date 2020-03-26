const connetion = require('../database/connection');

module.exports = {
  async create (request, response) {
    const { id } = request.body;

    const ong = await connetion('ongs')
      .where('id', id)
      .select('name')
      .first();

    if(!ong) {
      return response.status(400).json({ error: 'Não foram encontrados registros com esse id' })
    }

    return response.json(ong);

  }
}
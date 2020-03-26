const crypto = require('crypto');
const connetion = require('../database/connection');

module.exports = {
  async index (request, response) {
    const ongs = await connetion('ongs').select('*');
  
    return response.json( ongs );
  },

  async create(request, response) {
    //const params = request.query;
    //const params = request.params;
    //const params = request.headers;
    //const params = request.body;

    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connetion('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id });
  }
}
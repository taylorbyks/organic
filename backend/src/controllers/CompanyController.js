const connection = require('../database/connection')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const [count] = await connection('companies').count()
    const companies = await connection('companies')
      .select('name', 'email', 'cnpj', 'whatsapp', 'city', 'uf')
      .limit(5)
      .offset((page - 1) * 5)

    response.header('X-Total-Count', count['count(*)'])
    return response.json(companies)
  },

  async create(request, response) {
    const { name, password, email, cnpj, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    const passwordHash = await bcrypt.hash(password, 8)

    await connection('companies').insert({
      id,
      name,
      password: passwordHash,
      email,
      cnpj,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id })
  },
}

const bcrypt = require('bcryptjs')
const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { email, password } = request.body
    const company = await connection('companies').where('email', email).select('name', 'password').first()

    if (!company) {
      return response.status(400).json({ error: 'Nenhuma Empresa corresponde a esse email.' })
    }

    const passwordMatch = await bcrypt.compare(password, company.password)

    if (!passwordMatch) {
      return response.status(400).json({ error: 'Password is incorrect' })
    }

    return response.json({
      name: company.name,
    })
  },
}

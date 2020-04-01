const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response) {
        const empresas = await connection('empresas').select('*')
    
        return response.json(empresas)
    },
    
    async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body
    
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('empresas').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id })
    }    
}
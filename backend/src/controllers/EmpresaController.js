const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response) {
        const empresas = await connection('empresas').select('*').limit(5)
        .offset((page - 1) * 5)
    
        response.header('X-Total-Count', count['count(*)'])
        return response.json(empresas)
    },
    
    async create(request, response) {
    const { name, password, email, whatsapp, city, uf } = request.body
    
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('empresas').insert({
        id,
        name,
        password,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id })
    }    
}
const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body
        const empresa = await connection('empresas')
            .where('id', id)
            .select('name')
            .first()
        
        if(!empresa) {
            return response.status(400).json({ error: 'Nenhuma Empresa corresponde a esse id.' })
        }
        
        return response.json(empresa)
    }
}
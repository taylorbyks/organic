const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const empresa_id =  request.headers.authorization

        const tarefas = await connection('tarefas')
            .where('empresa_id', empresa_id)
            .select('*')
        
            return response.json(tarefas)
    }
}
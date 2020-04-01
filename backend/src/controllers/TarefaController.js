const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query
        
        const [count] = await connection('tarefas').count()

        const tarefas = await connection('tarefas')
            .join('empresas', 'empresas.id', '=', 'tarefas.empresa_id')    
            .limit(5)
            .offset((page - 1) * 5)
            .select(['tarefas.*',
                    'empresas.name',
                    'empresas.email',
                    'empresas.whatsapp',
                    'empresas.city',
                    'empresas.uf',])

        response.header('X-Total-Count', count['count(*)'])
    
        return response.json(tarefas)
    },
    
    async create(request, response) {
    const { title, description, value } = request.body
    const empresa_id = request.headers.authorization

    const [id] = await connection('tarefas').insert({
        title,
        description,
        value,
        empresa_id,
    })

    return response.json({ id })
    },
    
    async delete(request, response) {
        const { id } = request.params
        const empresa_id = request.headers.authorization

        const tarefas = await connection('tarefas')
        .where('id', id)
        .select('empresa_id')
        .first()

        if (tarefas.empresa_id != empresa_id){
            return response.status(401).json({ error: 'Operacao nao permitida' })
        }

        await connection('tarefas').where('id', id).delete()

        return response.status(204).send()
    }
}
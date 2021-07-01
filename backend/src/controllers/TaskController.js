const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const [count] = await connection('tasks').count()

    const tasks = await connection('tasks')
      .join('companies', 'companies.id', '=', 'tasks.company_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'tasks.*',
        'companies.name',
        'companies.email',
        'companies.cnpj',
        'companies.whatsapp',
        'companies.city',
        'companies.uf',
      ])

    response.header('X-Total-Count', count['count(*)'])

    return response.json(tasks)
  },

  async indexOne(request, response) {
    let { id } = request.params
    let [recebidoFront] = id.split(':')
    id = recebidoFront

    if (!id)
      return response.status(401).json({
        error: 'ID desconhecido!',
      })

    const tasks = await connection('tasks').select('*').where('id', id).first()

    return response.json(tasks)
  },

  async create(request, response) {
    const { title, description, value } = request.body
    const company_id = request.headers.authorization

    const [id] = await connection('tasks').insert({
      title,
      description,
      value,
      company_id,
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params
    const company_id = request.headers.authorization

    const tasks = await connection('tasks').where('id', id).select('company_id').first()

    if (tasks.company_id != company_id) {
      return response.status(401).json({ error: 'Operação nao permitida' })
    }

    await connection('tasks').where('id', id).delete()

    return response.status(204).send()
  },

  async update(request, response) {
    const { id } = request.params

    const tasks = await connection('tasks').where('id', id).select('company_id').first()

    const { title, description, value, companyId } = request.body

    if (tasks.company_id != companyId) {
      return response.status(401).json({
        error: 'operation not permitted',
      })
    }

    await connection('tasks').where('id', id).update({ title, description, value })

    return response.status(204).send()
  },
}

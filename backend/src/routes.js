const express = require('express')
const EmpresaController = require('./controllers/EmpresaController')
const TarefaController = require('./controllers/TarefaController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/empresas', EmpresaController.index)
routes.post('/empresas', EmpresaController.create)

routes.get('/profile', ProfileController.index)

routes.get('/tarefas', TarefaController.index)
routes.post('/tarefas', TarefaController.create)
routes.delete('/tarefas/:id', TarefaController.delete)

module.exports = routes
 
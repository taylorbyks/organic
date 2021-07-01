const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const CompanyController = require('./controllers/CompanyController')
const TaskController = require('./controllers/TaskController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/companies', CompanyController.index)

routes.post('/companies', CompanyController.create)

routes.get('/company', ProfileController.index)

routes.get('/tasks', TaskController.index)

routes.post(
  '/tasks',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number(),
    }),
  }),
  TaskController.create
)

//Recuperar tasks individuais
routes.get('/tasks/:id', TaskController.indexOne)

routes.delete(
  '/tasks/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  TaskController.delete
)

routes.put('/tasks/:id', TaskController.update)

module.exports = routes

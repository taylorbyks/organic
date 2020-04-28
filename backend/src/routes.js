const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate');

const EmpresaController = require('./controllers/EmpresaController')
const TarefaController = require('./controllers/TarefaController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.required()
    })
}), SessionController.create)


routes.get('/empresas', EmpresaController.index)

routes.post('/empresas', /*celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),*/ EmpresaController.create)


routes.get('/empresa', /*celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),*/ ProfileController.index)


routes.get('/tarefas', /*celebrate({
    [Segments.QUERY]: Joi.object({
        page: Joi.number()
    })
}),*/ TarefaController.index)

routes.post('/tarefas',  celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number()
    })
}), TarefaController.create)


//Recuperar tarefas individuais 
routes.get('/tarefas/:id', /*celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),*/ TarefaController.indexOne);

routes.delete('/tarefas/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), TarefaController.delete);

routes.put('/tarefas/:id',/* celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required
    })
}),*/ TarefaController.update);

module.exports = routes
 






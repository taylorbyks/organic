import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Profiles from './pages/Profiles'
import Task from './pages/Task'
import UpdateTask from './pages/TaskUpdate'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/empresa" component={Profiles} />
                <Route path="/tarefas/nova" component={Task} />
                <Route path="/tarefas/update/:id" exact component={UpdateTask}/>
            </Switch>
        </BrowserRouter>
    )
}
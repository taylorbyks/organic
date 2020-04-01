import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Profiles from './pages/Profiles'
import Task from './pages/Task'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profiles} />
                <Route path="/task/new" component={Task} />
            </Switch>
        </BrowserRouter>
    )
}
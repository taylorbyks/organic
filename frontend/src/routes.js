import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Profiles from './pages/Profiles'
import Task from './pages/Task'
import UpdateTask from './pages/TaskUpdate'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/company" component={Profiles} />
        <Route path="/tasks/nova" component={Task} />
        <Route path="/tasks/update/:id" exact component={UpdateTask} />
      </Switch>
    </BrowserRouter>
  )
}

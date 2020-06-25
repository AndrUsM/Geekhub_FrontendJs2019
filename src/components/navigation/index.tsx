import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import Reset from '../auth/Reset';
// Dashboard
import Projects from '../dashboard/projects/all/projects';
import ProjectsWorkflow from '../dashboard/projects/workflow/workflow';
import Messages from '../dashboard/messager/messenger';
import StubDashbord from '../dashboard/stub';

export default class Navigation extends Component {

    render(){
        return [
            <BrowserRouter key = "navigation">
                <Switch>
                    <Route exact path = "/" component = { Login } key = "login" />
                    <Route path = "/reset" component = { Reset } key = "reset password" />
                    <Route path = "/signup" component = { SignUp } key = "signup" />
                    <Route exact path = "/dashboard/projects" component = { Projects }  key = "projects"/>
                    <Route path = "/dashboard/projects/workflow" component = { ProjectsWorkflow } key = "projects.workflow" />
                    <Route path = "/dashboard/messenger" component = { Messages }  key = "messenger"/>
                    <Route path = "/dashboard" component = { StubDashbord } key = "not ready" />
                </Switch>
            </BrowserRouter>
        ]
    }
}
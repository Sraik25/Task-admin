import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import PrivateRoute from './components/routes/PrivateRoute';
import tokenAuth from './config/tokenAuth';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import ProjectState from './context/projects/projectState';
import TaskState from './context/Tasks/taskState';

// check token

const token = localStorage.getItem('token');

if (token) {
  tokenAuth(token);
}

function App() {
  
  return (
    <AuthState>
      <AlertState>
        <ProjectState>
          <TaskState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </BrowserRouter>
          </TaskState>
        </ProjectState>
      </AlertState>
    </AuthState>
  );
}

export default App;

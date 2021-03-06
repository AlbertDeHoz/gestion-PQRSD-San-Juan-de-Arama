import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import RutaProtegida from './auth'
import Aplicativo from './pages/Aplicativo';
import Logout from './components/Logout'
import './App.css'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Registro" component={Registro} />
            <Route exact path="/logout" component={Logout} />
            <RutaProtegida path="/Pqrsd" component={Aplicativo}/>
        </Switch>
    </Router>
)
export default Routes;
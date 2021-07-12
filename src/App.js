import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Listado from './pages/Listado';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminDependencias from './pages/Admin/AdminDependencias';
import AdminEmpresasTransportadoras from './pages/Admin/AdminEmpresasTransportadoras';
import AdminTiposPQRSD from './pages/Admin/AdminTiposPQRSD';
import AdminMecanismos from './pages/Admin/AdminMecanismos';
import AdminTiposNotificacion from './pages/Admin/AdminTiposNotificacion';
import AdminTiemposRespuesta from './pages/Admin/AdminTiemposRespuesta';
import AdminTramites from './pages/Admin/AdminTramites';
import AdminEstadosPQRSD from './pages/Admin/AdminEstadosPQRSD';

function App() {
  return (
    <div class="wrapper">
        <Header/>
        <Menu/>
          <Switch>
            <Route path="/" exact><Dashboard/></Route>
            <Route path="/Dashboard"><Dashboard/></Route>
            <Route path="/Listado"><Listado/></Route>
            <Route path="/admin-dependencias"><AdminDependencias/></Route>
            <Route path="/admin-tipos-PQRSD"><AdminTiposPQRSD/></Route>
            <Route path="/admin-mecanismos-recepcion"><AdminMecanismos/></Route>
            <Route path="/admin-tipos-notificacion"><AdminTiposNotificacion/></Route>
            <Route path="/admin-tiempos-respuesta"><AdminTiemposRespuesta/></Route>
            <Route path="/admin-empresas-transporte"><AdminEmpresasTransportadoras/></Route>
            <Route path="/admin-estados-pqrsd"><AdminEstadosPQRSD/></Route>
            <Route path="/admin-tramites"><AdminTramites/></Route>
          </Switch>
        <Footer/>
    </div>
  );
}

export default App;

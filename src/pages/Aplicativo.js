import Header from '../components/Header';
import Menu from '../components/Menu';
import Dashboard from './Dashboard';
import Footer from '../components/Footer';
import Listado from './Listado';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminDependencias from './Admin/AdminDependencias';
import AdminEmpresasTransportadoras from './Admin/AdminEmpresasTransportadoras';
import AdminTiposPQRSD from './Admin/AdminTiposPQRSD';
import AdminMecanismos from './Admin/AdminMecanismos';
import AdminTiposNotificacion from './Admin/AdminTiposNotificacion';
import AdminTiemposRespuesta from './Admin/AdminTiemposRespuesta';
import AdminTramites from './Admin/AdminTramites';
import AdminEstadosPQRSD from './Admin/AdminEstadosPQRSD';
import AdminUsuarios from './Admin/AdminUsuarios';
import Welcome from '../components/Welcome';
import UserInfo from '../components/UserInfo'
import '../App.css';
import EditTipoPqrsd from '../components/EditTipoPqrsd';
import CreateTipoPqrsd from '../components/CreateTipoPqrsd';

function Aplicativo() {
  return (
    <div class="wrapper">
        <Header/>
          <Menu/>
            <Switch>
                <Route exact path="/Pqrsd"><Welcome/></Route>
                <Route exact path="/Pqrsd/userinfo"><UserInfo/></Route>
                <Route path="/Pqrsd/Dashboard"><Dashboard/></Route>
                <Route path="/Pqrsd/Listado"><Listado/></Route>
                <Route path="/Pqrsd/admin-dependencias"><AdminDependencias/></Route>
                <Route path="/Pqrsd/admin-usuarios"><AdminUsuarios/></Route>
                <Route exact path="/Pqrsd/admin-tipos-PQRSD"><AdminTiposPQRSD/></Route>
                <Route path="/Pqrsd/admin-tipos-PQRSD/edit-TipoPqrsd/:id" component={EditTipoPqrsd} />
                <Route exact path="/Pqrsd/admin-tipos-PQRSD/new-TipoPqrsd" component={CreateTipoPqrsd} />
                <Route path="/Pqrsd/admin-mecanismos-recepcion"><AdminMecanismos/></Route>
                <Route path="/Pqrsd/admin-tipos-notificacion"><AdminTiposNotificacion/></Route>
                <Route path="/Pqrsd/admin-tiempos-respuesta"><AdminTiemposRespuesta/></Route>
                <Route path="/Pqrsd/admin-empresas-transporte"><AdminEmpresasTransportadoras/></Route>
                <Route path="/Pqrsd/admin-estados-pqrsd"><AdminEstadosPQRSD/></Route>
                <Route path="/Pqrsd/admin-tramites"><AdminTramites/></Route>
            </Switch>
          <Footer/>
    </div>
  );
}

export default Aplicativo;

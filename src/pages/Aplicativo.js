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
import AdminTramites from './Admin/AdminTramites';
import AdminEstadosPQRSD from './Admin/AdminEstadosPQRSD';
import AdminUsuarios from './Admin/AdminUsuarios';
import Welcome from '../components/Welcome';
import UserInfo from '../components/UserInfo'
import '../App.css';
import EditTipoPqrsd from '../components/tipoPqrsd/EditTipoPqrsd';
import CreateTipoPqrsd from '../components/tipoPqrsd/CreateTipoPqrsd';
import EditMecanismoRecepcion from '../components/mecanismosRecepcion/EditMecanismoRecepcion'
import CreateMecanismoRecepcion from '../components/mecanismosRecepcion/CreateMecanismoRecepcion'
import EditDependencia from '../components/Dependencias/EditDependencia'
import CreateDependencia from '../components/Dependencias/CreateDependencia'
import EditTipoNotificacion from '../components/tiposNotificacion/EditTipoNotificacion'
import CreateTiposNotificacion from '../components/tiposNotificacion/CreateTiposNotificacion'
import CreateEmpresaTransporte from '../components/empresasTransporte/CreateEmpresaTransporte'
import EditEmpresaTransporte from '../components/empresasTransporte/EditEmpresaTransporte'
import CreateEstadoPqrsd from '../components/EstadosPqrsd/CreateEstadoPqrsd'
import EditEstadoPqrsd from '../components/EstadosPqrsd/EditEstadoPqrsd'

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

                <Route exact path="/Pqrsd/admin-dependencias"><AdminDependencias/></Route>
                <Route path="/Pqrsd/admin-dependencias/edit-Dependencia/:id" component={EditDependencia} />
                <Route exact path="/Pqrsd/admin-dependencias/new-Dependencia" component={CreateDependencia} />

                <Route path="/Pqrsd/admin-usuarios"><AdminUsuarios/></Route>

                <Route exact path="/Pqrsd/admin-tipos-PQRSD"><AdminTiposPQRSD/></Route>
                <Route path="/Pqrsd/admin-tipos-PQRSD/edit-TipoPqrsd/:id" component={EditTipoPqrsd} />
                <Route exact path="/Pqrsd/admin-tipos-PQRSD/new-TipoPqrsd" component={CreateTipoPqrsd} />

                <Route exact path="/Pqrsd/admin-mecanismos-recepcion"><AdminMecanismos/></Route>
                <Route path="/Pqrsd/admin-mecanismos-recepcion/edit-Mecanismo-Recepcion/:id" component={EditMecanismoRecepcion} />
                <Route exact path="/Pqrsd/admin-mecanismos-recepcion/new-Mecanismo-Recepcion" component={CreateMecanismoRecepcion} />

                <Route exact path="/Pqrsd/admin-tipos-notificacion"><AdminTiposNotificacion/></Route>
                <Route path="/Pqrsd/admin-tipos-notificacion/edit-Tipo-Notificacion/:id" component={EditTipoNotificacion} />
                <Route exact path="/Pqrsd/admin-tipos-notificacion/new-Tipo-Notificacion" component={CreateTiposNotificacion} />

                <Route exact path="/Pqrsd/admin-empresas-transporte"><AdminEmpresasTransportadoras/></Route>
                <Route path="/Pqrsd/admin-empresas-transporte/edit-Empresa-Transporte/:id" component={EditEmpresaTransporte} />
                <Route exact path="/Pqrsd/admin-empresas-transporte/new-Empresa-Transportadora" component={CreateEmpresaTransporte} />

                <Route exact path="/Pqrsd/admin-estados-pqrsd"><AdminEstadosPQRSD/></Route>
                <Route path="/Pqrsd/admin-estados-pqrsd/edit-Estado-Pqrsd/:id" component={EditEstadoPqrsd} />
                <Route exact path="/Pqrsd/admin-estados-pqrsd/new-Estado-Pqrsd" component={CreateEstadoPqrsd} />

                <Route path="/Pqrsd/admin-tramites"><AdminTramites/></Route>
            </Switch>
          <Footer/>
    </div>
  );
}

export default Aplicativo;

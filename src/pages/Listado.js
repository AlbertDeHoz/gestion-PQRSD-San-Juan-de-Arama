import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import GestionarPQRSD from "../components/GestionarPQRSD";
import axios from "axios";

import ButtonLaunchModal from "../components/ButtonLaunchModal";
import ModalAddNew from "../components/ModalAddNew";
import DataGrid from "../components/DataGrid";

class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      pqrsdsData: [],
      pqrsdToManage: {},
      columns: [
        {
          Header: "n radicado",
          accessor: "no_radicado",
        },
        {
          Header: "Tipo Pqrsd",
          accessor: "t_pqrsd",
        },
        {
          Header: "Plazo respuesta",
          accessor: "plazo_respuesta",
        },
        {
          Header: "nombre Solicitante",
          accessor: "nombre_solicitante",
        },
        {
          Header: "entidad",
          accessor: "entidad",
        },
        {
          Header: "dirección",
          accessor: "direccion",
        },
      ],
    };
    this.createPqrsd = this.createPqrsd.bind(this);
    this.getPqrsdToManage = this.getPqrsdToManage.bind(this);
    this.updatePqrsdManaged = this.updatePqrsdManaged.bind(this);
  }
  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const token = localStorage.getItem("auth-token");

    axios
      .get("http://localhost:5000/api/user/userinfo", {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ user: response.data });
        const datos = response.data._id;
        this.getPqrsd(datos);
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

  getPqrsd(e) {
    //console.log(e)
    const token = localStorage.getItem("auth-token");
    axios
      .get(`http://localhost:5000/api/pqrsd/${e}/pqrsds`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ pqrsdsData: response.data.pqrsds });
        console.log(response.data.pqrsds);
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

  //Recibe las pqrsd desde el <FormNewAdd/>
  async createPqrsd(newPqrsd) {
    // Petición a la base de datos
    const token = localStorage.getItem("auth-token");
    const response = await fetch(
      `http://localhost:5000/api/pqrsd/create/${this.state.user._id}`,
      {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPqrsd),
      }
    );
    // si la petición es correcta entoces que renderice la nueva pqrsd creada
    if (response.ok) {
      // TODO: la base de datos tiene que responder con la pqrsd creada
      //const data = await response.json();
      const pqrsdsData = this.state.pqrsdsData;
      this.setState({ pqrsdsData: [...pqrsdsData, { ...newPqrsd }] });
    }
  }

  getPqrsdToManage(pqrsd) {
    const { no_radicado } = pqrsd;
    const pqrsdsData = this.state.pqrsdsData;
    const pqrsdToManag = pqrsdsData.find(
      (data) => data.no_radicado === no_radicado
    );
    console.log(pqrsdToManag);
    this.setState({ pqrsdToManage: pqrsdToManag });
  }

  //se recibe el no_radicado de la pqrsd administrada y los campos administrados(fieldManaged) desde el componente GestionarPqrsd
  //Gracias al no_radicado se localiza la pqrsd que está siendo gestionada y se asigna a pqrsdManaged
  //Se le asignan los campos administrados a pqrsdManaged
  updatePqrsdManaged(no_radicado,fieldManaged) {
    const pqrsdManaged = this.state.pqrsdsData.find( pqrsd => pqrsd.no_radicado === no_radicado );
    Object.assign(pqrsdManaged,fieldManaged);
  }
  render() {
    let { url, path } = this.props.match;
    return (
      <div className="content-wrapper">
        <Switch>
          <Route exact path={`${path}`}>
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-blue-institucional">
                      Listado de PQRSDs
                    </h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item active">{url}</li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main table */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title text-blue-institucional mt-3 ml-4">
                          Listado total de PQRSDs San Juan de Arama
                        </h3>
                        <div className="mt-3 mr-4">
                          <ButtonLaunchModal
                            class="btn btn-block btn-institucional text-white btn-xs ml-auto"
                            modalId="nuevaPqrsd"
                            name="Crear Nueva PQRSD"
                          >
                            <ModalAddNew submitForm={this.createPqrsd} />
                          </ButtonLaunchModal>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body" id="datagrid">
                        <DataGrid
                          data={this.state.pqrsdsData}
                          columns={this.state.columns}
                          clickOnPqrsdToManage={this.getPqrsdToManage}
                        >
                          <Link to={`${path}/gestionar`}>
                            <button className="btn btn-block btn-outline-primary btn-xs">
                              <i className="fas fa-edit" />
                              Gestionar
                            </button>
                          </Link>
                          {/* <ButtonLaunchModal
                              class="btn btn-block btn-outline-primary btn-xs"
                              modalId="gestion"
                              classIcon="fas fa-edit"
                              name="Gestionar"
                            >
                              <ModalGestionar data={this.state.pqrsdsData} />
                            </ButtonLaunchModal> */}
                        </DataGrid>
                      </div>
                      {/* /.card-body */}
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </section>
          </Route>
          <Route path={`${path}/gestionar`}>
            <GestionarPQRSD 
            pqrsdToManage={this.state.pqrsdToManage}
            handlePqrsdManaged={this.updatePqrsdManaged}
            /> 
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter((props) => <Listado {...props} />);

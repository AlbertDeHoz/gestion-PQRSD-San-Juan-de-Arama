import React from 'react'
import DataGrid from '../components/DataGridDashboard';
import axios from "axios";
import '../App.css';
import { withRouter } from "react-router-dom";

class Dashboard extends React.Component {
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
    this.filtrarPorDespacho = this.filtrarPorDespacho.bind(this);
    this.filtrarPorPlaneacion = this.filtrarPorPlaneacion.bind(this);
    this.filtrarPorGobierno = this.filtrarPorGobierno.bind(this);
    this.filtrarPorFinanciera = this.filtrarPorFinanciera.bind(this);
    this.filtrarPorSocial = this.filtrarPorSocial.bind(this);
    this.filtrarResueltas = this.filtrarResueltas.bind(this);
    this.filtrarSinRespuesta = this.filtrarSinRespuesta.bind(this);
  }
  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const token = localStorage.getItem("auth-token");

    axios
      .get(`${process.env.REACT_APP_HOST_API}/api/user/userinfo`, {
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
      .get(`${process.env.REACT_APP_HOST_API}/api/pqrsd/${e}/pqrsds`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ pqrsdsData: response.data.pqrsds });
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
      `${process.env.REACT_APP_HOST_API}/api/pqrsd/create/${this.state.user._id}`,
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
      const data = await response.json();
      const  [...pqrsdsData ] = this.state.pqrsdsData;
      pqrsdsData.push(data);
      this.setState({ pqrsdsData });
    }
  }

  getPqrsdToManage(pqrsd) {
    const { no_radicado } = pqrsd;
    const pqrsdsData = this.state.pqrsdsData;
    const pqrsdToManag = pqrsdsData.find(
      (data) => data.no_radicado === no_radicado
    );
    this.setState({ pqrsdToManage: pqrsdToManag });
  }

  

  //se recibe el no_radicado de la pqrsd administrada y los campos administrados(fieldManaged) desde el componente GestionarPqrsd
  //Gracias al no_radicado se localiza la pqrsd que está siendo gestionada y se asigna a pqrsdManaged
  //Se le asignan los campos administrados a pqrsdManaged
  async updatePqrsdManaged(_id,pqrsdManaged) {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_API}/api/pqrsd/manage/${_id}`,{
        method:'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(pqrsdManaged)
      })
    if (response.ok){
      const data = await response.json();
      const pqrsdToUpdate = this.state.pqrsdsData.find( pqrsd => pqrsd._id === _id);
      Object.assign(pqrsdToUpdate,data);
    }
  }

  filtrarPorDespacho(obj) {
    if (obj.dependencia == 'Despacho') {
      return true;
    } else {
      return false;
    }
  }

  filtrarPorPlaneacion(obj) {
    if (obj.dependencia == 'Secretaría de Planeación e Infraestructura') {
      return true;
    } else {
      return false;
    }
  }
  
  filtrarPorGobierno(obj) {
    if (obj.dependencia == 'Secretaría de Gobierno Seguridad y Convivencia') {
      return true;
    } else {
      return false;
    }
  }

  filtrarPorFinanciera(obj) {
    if (obj.dependencia == 'Secretaría Financiera') {
      return true;
    } else {
      return false;
    }
  }

  filtrarPorSocial(obj) {
    if (obj.dependencia == 'Secretaría de Desarrollo Económico y Social') {
      return true;
    } else {
      return false;
    }
  }
  filtrarSinRespuesta(obj) {
    if (obj.status == "En tramite") {
      return true;
    } else {
      return false;
    }
  }

  filtrarResueltas(obj) {
    if (obj.status != "Resuelto") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let arrPorDespacho = this.state.pqrsdsData.filter(this.filtrarPorDespacho);
    let arrPorPlaneacion = this.state.pqrsdsData.filter(this.filtrarPorPlaneacion);
    let arrPorGobierno = this.state.pqrsdsData.filter(this.filtrarPorGobierno);
    let arrPorFinanciera = this.state.pqrsdsData.filter(this.filtrarPorFinanciera);
    let arrPorSocial = this.state.pqrsdsData.filter(this.filtrarPorSocial);
    let arrSinRespuesta = this.state.pqrsdsData.filter(this.filtrarSinRespuesta);
    let arrResueltas = this.state.pqrsdsData.filter(this.filtrarResueltas);
    let { url, path } = this.props.match;
    return (
            <div>
            <div className="content-wrapper">
              {/* Content Header (Page header) */}
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0 text-blue-institucional">Dashboard</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item active">{url}</li>
                      </ol>
                    </div>{/* /.col */}
                  </div>{/* /.row */}
                </div>{/* /.container-fluid */}
              </div>
              {/* /.content-header */}
              {/* Main content */}
              <section className="content">
                <div className="container-fluid">
                  {/* Small boxes (Stat box) */}
                  <div className="row">
                    <div className="col-12 col-lg-3 col-sm-6 col-md-4 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>Total de PQRSDs</p>
                          <h3>{this.state.pqrsdsData.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12 col-sm-6 col-md-4 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>PQRSDs sin respuesta</p>
                          <h3>{arrSinRespuesta.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer text-blue-institucional ml-auto mr-3 pt-5">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12 col-sm-6 col-md-4 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>Porcentaje de PQRSD Resueltas</p>
                          <h3>{((arrResueltas.length)*this.state.pqrsdsData.length)/100}<sup style={{fontSize: 20}}>%</sup></h3>
                        </div>
                        {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12 col-sm-6 col-md-4 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 my-auto text-blue-institucional">
                          <p>Despacho</p>
                          <h3>{arrPorDespacho.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer text-blue-institucional ml-auto mr-3 pt-5">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a> */}
                      </div>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6 col-md-4 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>Secretaría de Planeación e Infraestructura</p>
                          <h3>{arrPorPlaneacion.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12 col-sm-6 col-md-4 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>Secretaría de Gobierno Seguridad y Convivencia</p>
                          <h3>{arrPorGobierno.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12 col-sm-6 col-md-6 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>Secretaría Financiera</p>
                          <h3>{arrPorFinanciera.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12 col-sm-6 col-md-6 mb-3">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner px-3 my-auto text-blue-institucional">
                          <p>Secretaría de Desarrollo Económico y Social</p>
                          <h3>{arrPorSocial.length}</h3>
                        </div>
                        {/* <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    {/* ./col */}
                  </div>
                </div>{/* /.container-fluid */}
              </section>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-12 col-sm-6">
                    <h1 className="m-0 text-blue-institucional">Listado PQRSDs San Juan de Arama</h1>
                  </div>
                </div>
              </div>{/* /.container-fluid */}
            </section>
            {/* Main table */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                            {/* /.card-header */}
                            <div className="card-body" id="datagrid">
                        <DataGrid
                          data={this.state.pqrsdsData}
                          columns={this.state.columns}
                        >
                        </DataGrid>
                      </div>
                      </div>
                      {/* /.card-body */}
                    </div>
                  </div>
                  {/* /.col */}
                </div>
              {/* /.container-fluid */}
            </section>

              {/* /.content */}
            </div>
          </div>

        )
    }
}

export default withRouter((props) => <Dashboard {...props} />);


import ButtonLaunchModal from "../components/ButtonLaunchModal";
import ModalAddNew from "../components/ModalAddNew";
import ModalGestionar from "../components/ModalGestionar";
import DataGrid from "../components/DataGrid";
import React from "react";

export default class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pqrsdsData: [],
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
  }
  componentDidMount(){
    this.getPqrsd()
  }
  async getPqrsd (){
    const response = await fetch(`${window.$url_api}/api/pqrsd/`);
    const data = await response.json();
    this.setState({pqrsdsData:data});
  }
  render() {
    const url = window.location.pathname
    return (
      <div>
        <div className="content-wrapper pt-4">
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
                    <li className="breadcrumb-item active">
                      {url}
                    </li>
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
                          <ModalAddNew />
                        </ButtonLaunchModal>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body" id="datagrid">
                      <DataGrid
                        data={this.state.pqrsdsData}
                        columns={this.state.columns}
                      >
                        <ButtonLaunchModal
                          class="btn btn-block btn-outline-primary btn-xs"
                          modalId="gestion"
                          classIcon="fas fa-edit"
                          name="Gestionar"
                        >
                          <ModalGestionar />
                        </ButtonLaunchModal>
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
        </div>
      </div>
    );
  }
}

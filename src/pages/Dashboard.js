import React from 'react'
import ButtonLaunchModal from '../components/ButtonLaunchModal';
import DataGrid from '../components/DataGrid';
import ModalAddNew from '../components/ModalAddNew';
import ModalGestionar from '../components/ModalGestionar';
import '../App.css';

export default class Dashboard extends React.Component {
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

  render() {
    const url = window.location.pathname
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
                  <div className="row pb-3">
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>150</h3>
                          <p>Total de PQRSDs</p>
                        </div>
                        {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>31</h3>
                          <p>PQRSDs sin respuesta</p>
                        </div>
                        <a href="#" className="small-box-footer text-blue-institucional ml-auto mr-3 pt-5">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>86<sup style={{fontSize: 20}}>%</sup></h3>
                          <p>PQRSD respondidas</p>
                        </div>
                        {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a> */}
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>30</h3>
                          <p>Despacho</p>
                        </div>
                        <a href="#" className="small-box-footer text-blue-institucional ml-auto mr-3 pt-5">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                  {/* Small boxes (Stat box) */}
                  <div className="row pb-3">
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>30</h3>
                          <p>Planeación...</p>
                        </div>
                        <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>30</h3>
                          <p>Gobierno...</p>
                        </div>
                        <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>30</h3>
                          <p>Financiera...</p>
                        </div>
                        <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="info-box shadow bg-white h-100">
                        <div className="inner pl-3 pt-3 text-blue-institucional">
                          <h3>30</h3>
                          <p>Social...</p>
                        </div>
                        <a href="#" className="small-box-footer text-blue-institucional pt-5 mr-3 ml-auto">Ver <i className="fas fa-arrow-circle-right pt-3 text-blue-institucional pl-3" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>{/* /.container-fluid */}
              </section>
              <div>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="text-blue-institucional">Listado PQRSDs San Juan de Arama</h1>
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
                      <div className="card-header align-items-center">
                        <h3 className="card-title text-blue-institucional">Listado total de PQRSDs San Juan de Arama</h3>
                        <div className="text-center">
                                <ButtonLaunchModal
                                  class="btn btn-block btn-institucional text-white w-25 ml-auto"
                                  modalId="nuevaPqrsd"
                                  name="Crear Nueva PQRSD"
                                >
                                  <ModalAddNew />
                                </ButtonLaunchModal>
                              </div>
                      </div>
                            {/* /.card-header */}
                            <div className="card-body">
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
                      </div>
                      {/* /.card-body */}
                    </div>
                  </div>
                  {/* /.col */}
                </div>
              {/* /.container-fluid */}
            </section>
          </div>

              {/* /.content */}
            </div>
          </div>

        )
    }
}


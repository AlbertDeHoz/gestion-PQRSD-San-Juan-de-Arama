import React, { Component } from 'react'
import axios from 'axios'
import TBodyMecanismosRecepcion from '../../components/Tbody/TBodyMecanismosRecepcion';
import { Link } from 'react-router-dom';

export default class AdminTiposPQRSD extends Component {

    constructor(){
        super();
        this.state = {
            mecaRecepcion: [],
            mensaje: ''
        };
    }

    componentDidMount(){
        this.getInfo()
    }

    getInfo(){
        const token = localStorage.getItem('auth-token');
        axios.get('http://localhost:5000/api/Mecanismos-Recepcion',{
            headers: {'auth-token': token}
        }).then(response => {
            this.setState({mecaRecepcion: response.data})
        }).catch(err =>{
            this.setState({ mensaje: err.response.data})
        });
    }

    DataTables() {
        return this.state.mecaRecepcion.map((res, i) => {
          return <TBodyMecanismosRecepcion obj={res} key={i} />;
        });
      }
    
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Mecanismos de Recepción  </h3>
                                            <div className="card-tools">
                                                <div className="h-50">
                                                    <Link to={"admin-mecanismos-recepcion/new-Mecanismo-Recepcion"} class="btn btn-block bg-institucional text-white btn-xs h-50">Nuevo Mecanismo de Recepcion</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body table-responsive p-0">
                                            <table id="tipospqrsd" className="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>Tipo de Pqrsd</th>
                                                        <th>Editar/Eliminar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.DataTables()}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            {/* /.row */}
                            
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

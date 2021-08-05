import React, { Component } from 'react'
import axios from 'axios'
import TbodyTiposPqrsd from '../../components/Tbody/TbodyTiposPqrsd';
import { Link } from 'react-router-dom';

export default class AdminTiposPQRSD extends Component {

    constructor(){
        super();
        this.state = {
            tPqrsd: [],
            mensaje: ''
        };
    }

    componentDidMount(){
        this.getInfo()
    }

    getInfo(){
        const token = localStorage.getItem('auth-token');
        axios.get('http://localhost:5000/api/Tipospqrsd',{
            headers: {'auth-token': token}
        }).then(response => {
            this.setState({tPqrsd: response.data})
        }).catch(err =>{
            this.setState({ mensaje: err.response.data})
        });
    }

    DataTables() {
        return this.state.tPqrsd.map((res, i) => {
          return <TbodyTiposPqrsd obj={res} key={i} />;
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
                                            <h3 className="card-title">Tipos de PQRSDs</h3>
                                            <div className="card-tools">
                                                <div className="h-50">
                                                    <Link to={"admin-tipos-PQRSD/new-TipoPqrsd/"} class="btn btn-block bg-institucional text-white btn-xs h-50">Nuevo tipo de pqrsd</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body table-responsive p-0">
                                            <table id="tipospqrsd" className="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>Tipo de Pqrsd</th>
                                                        <th>Días tiempo de respuesta</th>
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

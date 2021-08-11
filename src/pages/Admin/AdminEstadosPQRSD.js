import React, { Component } from 'react'
import axios from 'axios'
import TBodyEstadosPqrsd from '../../components/Tbody/TBodyEstadosPqrsd';
import { Link } from 'react-router-dom';
export default class AdminEstadosPQRSD extends Component {

    constructor(){
        super();
        this.state = {
            EstdosPqrsd: [],
            mensaje: ''
        };
    }

    componentDidMount(){
        this.getInfo()
    }

    getInfo(){
        const token = localStorage.getItem('auth-token');
        axios.get(`${process.env.REACT_APP_HOST_API}/api/Estados-Pqrsd`,{
            headers: {'auth-token': token}
        }).then(response => {
            this.setState({EstdosPqrsd: response.data})
        }).catch(err =>{
            this.setState({ mensaje: err.response.data})
        });
    }

    DataTables() {
        return this.state.EstdosPqrsd.map((res, i) => {
          return <TBodyEstadosPqrsd obj={res} key={i} />;
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
                                            <h3 className="card-title">Estados de Pqrsd</h3>
                                            <div className="card-tools">
                                                <div className="h-50">
                                                    <Link to={"admin-estados-pqrsd/new-Estado-Pqrsd"} class="btn btn-block bg-institucional text-white btn-xs h-50">Nuevo estado de PQRSD</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body table-responsive p-0">
                                            <table id="tipospqrsd" className="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>Estado de PQRSD</th>
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

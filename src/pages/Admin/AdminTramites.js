import React, { Component } from 'react'
import axios from 'axios'
import TBodyTramites from '../../components/Tbody/TBodyTramites';
import { Link } from 'react-router-dom';

export default class AdminTramites extends Component {

    constructor(){
        super();
        this.state = {
            tramites: [],
            mensaje: ''
        };
    }

    componentDidMount(){
        this.getInfo()
    }

    getInfo(){
        const token = localStorage.getItem('auth-token');
        axios.get(`${process.env.REACT_APP_HOST_API}/api/Tramites`,{
            headers: {'auth-token': token}
        }).then(response => {
            this.setState({tramites: response.data})
        }).catch(err =>{
            this.setState({ mensaje: err.response.data})
        });
    }

    DataTables() {
        return this.state.tramites.map((res, i) => {
          return <TBodyTramites obj={res} key={i} />;
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
                                            <h3 className="card-title">Tramites SUIT</h3>
                                            <div className="card-tools">
                                                <div className="h-50">
                                                    <Link to={"admin-tramites/new-Tramite/"} class="btn btn-block bg-institucional text-white btn-xs h-50">Nuevo trámite</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body table-responsive p-0">
                                            <table id="tipospqrsd" className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Codigo</th>
                                                        <th>Nombre</th>
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

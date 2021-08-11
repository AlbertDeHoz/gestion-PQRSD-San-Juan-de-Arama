import React, { Component } from 'react'
import axios from 'axios'
import Tbody from '../../components/Tbody/TbobyUser';
import { Link } from 'react-router-dom';

export default class AdminUsuarios extends Component {
    constructor(){
        super();
        this.state = {
            user: [],
            name: '',
            file: null,
            email: '',
            mensaje: ''
        };
    }

    componentDidMount(){
        this.getInfo()
    }

    getInfo(){
        const token = localStorage.getItem('auth-token');
        axios.get(`${process.env.REACT_APP_HOST_API}/api/user`,{
            headers: {'auth-token': token}
        }).then(response => {
            this.setState({user: response.data})
        }).catch(err =>{
            this.setState({ mensaje: err.response.data})
        });
    }

    DataTable() {
        return this.state.user.map((res, i) => {
          return <Tbody obj={res} key={i} />;
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
                                            <h3 className="card-title">Gestion de usuarios</h3>
                                            <div className="card-tools">
                                                <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Buscar usuario" />
                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-default">
                                                            <i className="fas fa-search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body table-responsive p-0">
                                            <table className="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre de Usuario</th>
                                                        <th>Correo</th>
                                                        <th>Gestionar usuario</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.DataTable()}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            {/* /.row */}
                            <div className="d-flex justify-content-end">
                                <div className="d-flex justify-content-end w-25">
                                    <Link to={"/registro"} class="btn btn-block bg-institucional text-white btn-xs w-50">Nuevo usuario</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class AdminTiemposRespuesta extends Component {
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
                                            <h3 className="card-title">Tiempos de Respuesta</h3>
                                            <div className="card-tools">
                                                <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Buscar dependencia" />
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
                                                        <th>ID</th>
                                                        <th>Numero de días</th>
                                                        <th>Editar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>001</td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                        <td><a class="btn btn-block btn-outline-primary btn-xs"><i class="fas fa-edit"></i> Edit</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>002</td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                        <td><a class="btn btn-block btn-outline-primary btn-xs"><i class="fas fa-edit"></i> Edit</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>003</td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                        <td><a class="btn btn-block btn-outline-primary btn-xs"><i class="fas fa-edit"></i> Edit</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>004</td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                        <td><a class="btn btn-block btn-outline-primary btn-xs"><i class="fas fa-edit"></i> Edit</a></td>
                                                    </tr>
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
                                    <a class="btn btn-block bg-institucional text-white btn-xs w-50">Nueva</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

import axios from 'axios';
import React, { Component } from 'react'
import { Form, } from 'react-bootstrap';


export default class CreateTramite extends Component {
    constructor(props){
        super(props);
        this.onChangeTramiteName = this.onChangeTramiteName.bind(this);
        this.onChangeTramiteCodigo = this.onChangeTramiteCodigo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: "",
        codigo: ""
    };
    }

    onChangeTramiteName(e){
        this.setState({name: e.target.value})
    }

    onChangeTramiteCodigo(e){
        this.setState({codigo: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        
        const token = localStorage.getItem('auth-token')
        var headers = {
            'auth-token': token
        }

        const tramiteObjet = {
            name: this.state.name,
            codigo: this.state.codigo,
        };
        axios
          .post(`${process.env.REACT_APP_HOST_API}/api/Tramites/create`, tramiteObjet, {headers: headers})
          .then((res) => console.log(res.data)).catch((error) => {
            console.log(error)
        });
    
        this.setState({
          name: "",
          codigo: "",
        });
        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-tramites")
      }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                        <div className="col-md-6 offset-md-3 pt-5">
                            <div className="card card-body">
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Tramite</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeTramiteName}/>
                                    </Form.Group>

                                    <Form.Group controlId="codigo">
                                        <Form.Label>Codigo de trámite</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.codigo}
                                        onChange={this.onChangeTramiteCodigo}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Crear trámite</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

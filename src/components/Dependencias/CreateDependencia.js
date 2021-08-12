import axios from 'axios';
import React, { Component } from 'react'
import { Form, } from 'react-bootstrap';

export default class CreateDependencia extends Component {
    constructor(props){
        super(props);
        this.onChangeDependencia = this.onChangeDependencia.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    
    onChangeDependencia(e){
        this.setState({name: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        
        const token = localStorage.getItem('auth-token')
        var headers = {
            'auth-token': token
        }

        const dependenciaObjet = {
            name: this.state.name,
        };
        axios
          .post(`${process.env.REACT_APP_HOST_API}/api/Dependencias/create`, dependenciaObjet, {headers: headers})
          .then((res) => console.log(res.data)).catch((error) => {
            console.log(error)
        });
    
        this.setState({
          name: ""
        });
        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-dependencias")
      }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                        <div className="col-md-6 offset-md-3 pt-5">
                            <div className="card card-body">
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Nombre de la dependencia</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeDependencia}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Crear Dependencia</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

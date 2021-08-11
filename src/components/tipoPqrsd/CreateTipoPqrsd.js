import axios from 'axios';
import React, { Component } from 'react'
import { Form, } from 'react-bootstrap';


export default class CreateTipoPqrsd extends Component {
    constructor(props){
        super(props);
        this.onChangeTipoPqrsdNDias = this.onChangeTipoPqrsdNDias.bind(this);
        this.onChangeTipoPqrsdName = this.onChangeTipoPqrsdName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: "",
        n_dias: ""
    };
    }

    onChangeTipoPqrsdName(e){
        this.setState({name: e.target.value})
    }

    onChangeTipoPqrsdNDias(e){
        this.setState({n_dias: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        
        const token = localStorage.getItem('auth-token')
        var headers = {
            'auth-token': token
        }

        const tipoPqrsdObjet = {
            name: this.state.name,
            n_dias: this.state.n_dias,
        };
        axios
          .post(`${process.env.REACT_APP_HOST_API}/api/Tipospqrsd/create`, tipoPqrsdObjet, {headers: headers})
          .then((res) => console.log(res.data)).catch((error) => {
            console.log(error)
        });
    
        this.setState({
          name: "",
          n_dias: "",
        });
        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-tipos-PQRSD")
      }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                        <div className="col-md-6 offset-md-3 pt-5">
                            <div className="card card-body">
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeTipoPqrsdName}/>
                                    </Form.Group>

                                    <Form.Group controlId="n_dias">
                                        <Form.Label>Numero de días para dar respuesta</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.n_dias}
                                        onChange={this.onChangeTipoPqrsdNDias}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Crear tipo de PQRSD</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

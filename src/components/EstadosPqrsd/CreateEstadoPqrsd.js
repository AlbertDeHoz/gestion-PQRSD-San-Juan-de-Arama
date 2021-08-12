import axios from 'axios';
import React, { Component } from 'react'
import { Form, } from 'react-bootstrap';

export default class CreateEstadoPqrsd extends Component {
    constructor(props){
        super(props);
        this.onChangeEstadoPqrsd = this.onChangeEstadoPqrsd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    
    onChangeEstadoPqrsd(e){
        this.setState({name: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        
        const token = localStorage.getItem('auth-token')
        var headers = {
            'auth-token': token
        }

        const estadosPqrsdObjet = {
            name: this.state.name,
        };
        axios
          .post(`${process.env.REACT_APP_HOST_API}/api/Estados-Pqrsd/create`, estadosPqrsdObjet, {headers: headers})
          .then((res) => console.log(res.data)).catch((error) => {
            console.log(error)
        });
    
        this.setState({
          name: ""
        });
        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-estados-pqrsd")
      }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                        <div className="col-md-6 offset-md-3 pt-5">
                            <div className="card card-body">
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Estado Pqrsd</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeEstadoPqrsd}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Crear Estado</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


import axios from 'axios';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditEstadosPqrsd extends Component {
    constructor(props){
        super(props);
        this.onChangeEstadosPqrsd = this.onChangeEstadosPqrsd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    componentDidMount(){
        axios
        .get(
          "http://localhost:5000/api/Estados-Pqrsd/edit/" +
            this.props.match.params.id
        )
        .then((res) => {
          this.setState({
            name: res.data.name
          });
        })
        .catch((error) => {
          console.log(error);
        }); 
    }

    onSubmit(e){
        e.preventDefault();
        
        const estadosPqrsdObjet = {
            name: this.state.name
        };

        axios.put(
            "http://localhost:5000/api/Estados-Pqrsd/update/" + this.props.match.params.id, estadosPqrsdObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Empresa de Transporte Actuaizado con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-estados-pqrsd")
    }

    onChangeEstadosPqrsd(e){
        this.setState({name: e.target.value})
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
                                        onChange={this.onChangeEstadosPqrsd}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Actualizar Estado</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


import axios from 'axios';
import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditTipoPqrsd extends Component {
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

    componentDidMount(){
        axios
        .get(
          "http://localhost:5000/api/Tipospqrsd/edit/" +
            this.props.match.params.id
        )
        .then((res) => {
          this.setState({
            name: res.data.name,
            n_dias: res.data.n_dias,
          });
        })
        .catch((error) => {
          console.log(error);
        }); 
    }

    onSubmit(e){
        e.preventDefault();
        
        const tipoPqrsdObjet = {
            name: this.state.name,
            n_dias: this.state.n_dias
        };

        axios.put(
            "http://localhost:5000/api/Tipospqrsd/update/" + this.props.match.params.id, tipoPqrsdObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Tipo de Pqrsd Actuaizada con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-tipos-PQRSD")
    }

    onChangeTipoPqrsdName(e){
        this.setState({name: e.target.value})
    }

    onChangeTipoPqrsdNDias(e){
        this.setState({n_dias: e.target.value})
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

                                    <button className="btn btn-institucional" type="submit">Actualizar Tipo de pqrsd</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

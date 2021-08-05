import axios from 'axios';
import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditMecanismoRecepcion extends Component {
    constructor(props){
        super(props);
        this.onChangeMecanismoRecepcionName = this.onChangeMecanismoRecepcionName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    componentDidMount(){
        axios
        .get(
          "http://localhost:5000/api/Mecanismos-Recepcion/edit/" +
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
        
        const MecanismosRecepcionObjet = {
            name: this.state.name
        };

        axios.put(
            "http://localhost:5000/api/Mecanismos-Recepcion/update/" + this.props.match.params.id, MecanismosRecepcionObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Mecanismo de Recepcion Actuaizado con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-mecanismos-recepcion")
    }

    onChangeMecanismoRecepcionName(e){
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
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeMecanismoRecepcionName}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Actualizar Mecanismo de Recepcion</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

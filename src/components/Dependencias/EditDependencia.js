import axios from 'axios';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditDependencia extends Component {
    constructor(props){
        super(props);
        this.onChangeDepencencias = this.onChangeDepencencias.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    componentDidMount(){
        axios
        .get(
            `${process.env.REACT_APP_HOST_API}/api/Dependencias/edit/` +
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
        
        const DependenciasObjet = {
            name: this.state.name
        };

        axios.put(
            `${process.env.REACT_APP_HOST_API}/api/Dependencias/update/` + this.props.match.params.id, DependenciasObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Dependencia Actuaizada con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-dependencias")
    }

    onChangeDepencencias(e){
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
                                        <Form.Label>Nombre de Dependencia</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeDepencencias}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Actualizar dependencia</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

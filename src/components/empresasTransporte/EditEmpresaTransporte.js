import axios from 'axios';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditEmpresaTransporte extends Component {
    constructor(props){
        super(props);
        this.onChangeEmpresaTransporte = this.onChangeEmpresaTransporte.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    componentDidMount(){
        axios
        .get(
            `${process.env.REACT_APP_HOST_API}/api/Empresas-Transportadoras/edit/` +
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
        
        const empresaTransporteObjet = {
            name: this.state.name
        };

        axios.put(
            `${process.env.REACT_APP_HOST_API}/api/Empresas-Transportadoras/update/` + this.props.match.params.id, empresaTransporteObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Empresa de Transporte Actuaizado con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-empresas-transporte")
    }

    onChangeEmpresaTransporte(e){
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
                                        <Form.Label>Nombre de Empresa</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeEmpresaTransporte}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Actualizar Empresa</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


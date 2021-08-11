import axios from 'axios';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditTramite extends Component {
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

    componentDidMount(){
        axios
        .get(
            `${process.env.REACT_APP_HOST_API}/api/Tramites/edit/` +
            this.props.match.params.id
        )
        .then((res) => {
          this.setState({
            name: res.data.name,
            codigo: res.data.codigo,
          });
        })
        .catch((error) => {
          console.log(error);
        }); 
    }

    onSubmit(e){
        e.preventDefault();
        
        const tramiteObjet = {
            name: this.state.name,
            codigo: this.state.codigo
        };

        axios.put(
            `${process.env.REACT_APP_HOST_API}/api/Tramites/update/` + this.props.match.params.id, tramiteObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Tramite Actuaizado con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-tramites")
    }

    onChangeTramiteName(e){
        this.setState({name: e.target.value})
    }

    onChangeTramiteCodigo(e){
        this.setState({codigo: e.target.value})
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                        <div className="col-md-6 offset-md-3 pt-5">
                            <div className="card card-body">
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Trámite</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeTramiteName}/>
                                    </Form.Group>

                                    <Form.Group controlId="codigo">
                                        <Form.Label>Codigo Trámite</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.codigo}
                                        onChange={this.onChangeTramiteCodigo}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Actualizar Trámite</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

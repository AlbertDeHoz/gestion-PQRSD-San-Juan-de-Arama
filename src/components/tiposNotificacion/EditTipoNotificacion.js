import axios from 'axios';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class EditTipoNotificacion extends Component {
    constructor(props){
        super(props);
        this.onChangeTiposNotificacion = this.onChangeTiposNotificacion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    //state

    this.state = {
        name: ""
    };
    }

    componentDidMount(){
        axios
        .get(
            `${process.env.REACT_APP_HOST_API}/Tipos-Notificacion/edit/` +
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
        
        const TipoNotificacionObjet = {
            name: this.state.name
        };

        axios.put(
            "http://localhost:5000/api/Tipos-Notificacion/update/" + this.props.match.params.id, TipoNotificacionObjet
        ).then((res) =>{
            console.log(res.data);
            console.log("Tipo de Notificacion Actuaizado con éxito");
        })
        .catch((error) => {
            console.log(error)
        });

        // redireccionando a listado de tipos de pqrsd
        this.props.history.push("/Pqrsd/admin-tipos-notificacion")
    }

    onChangeTiposNotificacion(e){
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
                                        <Form.Label>Tipo de Notificacion</Form.Label>
                                        <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeTiposNotificacion}/>
                                    </Form.Group>

                                    <button className="btn btn-institucional" type="submit">Actualizar Tipo de Notificacion</button>
                                </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


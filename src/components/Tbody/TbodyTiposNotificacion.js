import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class TiposNotificacionTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteTiposNotificacion = this.deleteTiposNotificacion.bind(this);
  }

  deleteTiposNotificacion() {
    axios.delete(
        'http://localhost:5000/api/Tipos-Notificacion/delete/' + this.props.obj._id
      )
      .then((res) => {
        console.log("Tipo de Notificacion borrada con exito");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>
          <div className="d-flex align-items-end">
            <Link to={"admin-tipos-notificacion/edit-Tipo-Notificacion/"  + this.props.obj._id} className="btn btn-block btn-primary btn-xs mr-auto">
          <i className="fas fa-edit" /> Editar
          </Link> 
          <Button onClick={this.deleteTiposNotificacion} className="btn btn-block btn-danger btn-xs ml-3">
            <i className="fas fa-trash" /> Eliminar
          </Button>
          </div>
        </td>
      </tr>
    );
  }
}

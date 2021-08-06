import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class estadosPqrsdTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteEstadoPqrsd = this.deleteEstadoPqrsd.bind(this);
  }

  deleteEstadoPqrsd() {
    axios.delete(
        'http://localhost:5000/api/Estados-Pqrsd/delete/' + this.props.obj._id
      )
      .then((res) => {
        console.log("Estado Pqrsd borrado con exito");
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
            <Link to={"admin-estados-pqrsd/edit-Estado-Pqrsd/"  + this.props.obj._id} className="btn btn-block btn-primary btn-xs mr-auto">
          <i className="fas fa-edit" /> Editar
          </Link> 
          <Button onClick={this.deleteEstadoPqrsd} className="btn btn-block btn-danger btn-xs ml-3">
            <i className="fas fa-trash" /> Eliminar
          </Button>
          </div>
        </td>
      </tr>
    );
  }
}

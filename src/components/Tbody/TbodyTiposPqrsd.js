import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import AdminTiposPQRSD from '../../pages/Admin/AdminTiposPQRSD'

export default class TipoPqrsdTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteTipoPqrsd = this.deleteTipoPqrsd.bind(this);
  }

  deleteTipoPqrsd() {
    axios.delete(
        'http://localhost:5000/api/Tipospqrsd/delete/' + this.props.obj._id
      )
      .then((res) => {
        console.log("PQRSD borrada con exito");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.n_dias} días {this.props.obj.t_dias}</td>
        <td>
          <div className="d-flex align-items-end">
            <Link to={"admin-tipos-PQRSD/edit-TipoPqrsd/"  + this.props.obj._id} className="btn btn-block btn-primary btn-xs mr-auto">
          <i className="fas fa-edit" /> Editar
          </Link> 
          <Button onClick={this.deleteTipoPqrsd} className="btn btn-block btn-danger btn-xs ml-3">
            <i className="fas fa-trash" /> Eliminar
          </Button>
          </div>
        </td>
      </tr>
    );
  }
}

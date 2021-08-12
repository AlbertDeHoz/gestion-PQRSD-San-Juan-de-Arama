import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import AdminTiposPQRSD from '../../pages/Admin/AdminTiposPQRSD'

export default class TipoPqrsdTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteTramite = this.deleteTramite.bind(this);
  }

  deleteTramite() {
    axios.delete(
        `${process.env.REACT_APP_HOST_API}/api/Tramites/delete/` + this.props.obj._id
      )
      .then((res) => {
        console.log("Tramite borrado con exito");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <tr>
        <td>{this.props.obj.codigo}</td>
        <td>{this.props.obj.name}</td>
        <td className="w-25">
          <div className="d-flex align-items-end">
            <Link to={"admin-tramites/edit-Tramite/"  + this.props.obj._id} className="btn btn-block btn-primary btn-xs mr-auto">
          <i className="fas fa-edit" /> Editar
          </Link> 
          <Button onClick={this.deleteTramite} className="btn btn-block btn-danger btn-xs ml-2">
            <i className="fas fa-trash" /> Eliminar
          </Button>
          </div>
        </td>
      </tr>
    );
  }
}

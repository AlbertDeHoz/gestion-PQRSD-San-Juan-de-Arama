import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class empresasTransportadorasTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteEmpresasTransportadoras = this.deleteEmpresasTransportadoras.bind(this);
  }

  deleteEmpresasTransportadoras() {
    axios.delete(
        `${process.env.REACT_APP_HOST_API}/api/Empresas-Transportadoras/delete/` + this.props.obj._id
      )
      .then((res) => {
        console.log("Empresa de Transporte borrada con exito");
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
            <Link to={"admin-empresas-transporte/edit-Empresa-Transporte/"  + this.props.obj._id} className="btn btn-block btn-primary btn-xs mr-auto">
          <i className="fas fa-edit" /> Editar
          </Link> 
          <Button onClick={this.deleteEmpresasTransportadoras} className="btn btn-block btn-danger btn-xs ml-3">
            <i className="fas fa-trash" /> Eliminar
          </Button>
          </div>
        </td>
      </tr>
    );
  }
}

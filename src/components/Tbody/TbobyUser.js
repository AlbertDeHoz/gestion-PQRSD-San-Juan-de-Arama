import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonLaunchModal from "../ButtonLaunchModal";
import ModalGestionar from "../ModalGestionar";
import { Button } from "react-bootstrap";

export default class UserTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    const token = localStorage.getItem('auth-token');
    axios.delete(
        'http://localhost:5000/api/user/delete/' + this.props.obj._id, {
          headers: {'auth-token': token}
      })
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
        <td><div className="rounded-circle d-block" style={{backgroundImage:`url(${this.props.obj.avatar})`, height: '40px', width: '40px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center',  border: '2px solid #FF9425'}}></div></td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>
          <Button onClick={this.deleteUser} className="btn btn-block btn-danger btn-xs ml-3">
            <i className="fas fa-trash" /> Eliminar
          </Button>
        </td>
      </tr>
    );
  }
}

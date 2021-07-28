import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonLaunchModal from "../components/ButtonLaunchModal";
import ModalGestionar from "./ModalGestionar";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td><div className="rounded-circle d-block" style={{backgroundImage:`url(${this.props.obj.avatar})`, height: '40px', width: '40px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center',  border: '2px solid #FF9425'}}></div></td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>
          <ButtonLaunchModal
                          class="btn btn-block btn-outline-primary btn-xs"
                          modalId="gestion"
                          classIcon="fas fa-edit"
                          name="Gestionar"
                        >
                          <ModalGestionar />
                        </ButtonLaunchModal>
        </td>
      </tr>
    );
  }
}

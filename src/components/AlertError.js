import { Component } from "react";

export default class AlertError extends Component{
  render() {
    return (
      <div className="alert alert-danger" role="alert">
        {this.props.mensaje}
      </div>
    );
  }
}

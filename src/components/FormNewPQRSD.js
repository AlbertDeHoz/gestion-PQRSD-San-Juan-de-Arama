import React, { Component } from "react";
import AlertError from "./AlertError";
export default class FormNewPQRSD extends Component {
  constructor() {
    super();
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time = new Date();
    time.setDate(time.getDate() + 15);
    this.state = {
      user: {},
      mensaje: "",
      t_respuesta:
        time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear(), // comento esto porque en la petición no se estaba mandando este dato
      ter_respuesta: "15",
      pqrsdData: {
        no_radicado: today.getTime().toString(),
        f_recibido: date,
        t_pqrsd: "",
        plazo_respuesta: time.toDateString(),
        nombre_solicitante: "",
        entidad: "",
        direccion: "",
        correo: "",
        telefono: "",
        descripcion: "descripcion",
        mec_recepcion: "",
        tramites: "tramite",
        dependencia: "",
        doc_solicitud: "url",
        n_of_respuesta: "",
        f_respuesta: time,
        tip_notificacion: "",
        emp_transporte: "",
        num_guia: "",
        op_respuesta: "",
        observaciones: "",
        aux_responsable: "",
        doc_respuesta: "url",
        status: "",
      },
    };
    this.manejarInput = this.manejarInput.bind(this);
    this.submitFormulario = this.submitFormulario.bind(this);
  }

  manejarInput(e) {
    const { name, value } = e.target;
    const { ...pqrsd } = this.state.pqrsdData;
    this.setState({
      pqrsdData: {
        ...pqrsd,
        [name]: value,
      },
    });
  }

  validateForm() {
    const pqrsdData = this.state.pqrsdData;
    const fieldsNotEmpty = ["nombre_solicitante", "entidad", "direccion", "t_pqrsd"];
    const filterEmpty = fieldsNotEmpty.filter(
      (key) => pqrsdData[key].length === 0
    );
    //si el arreglo filterEmpty es mayor que cero entonces hay campos obligatorios vacíos
    if (filterEmpty.length !== 0) {
      const mensaje = `Campos obligatorios vacíos: ${filterEmpty.join()}`;
      this.setState({ mensaje });
      return false;
    }
    this.setState({mensaje:''});
    return true;
  }

  async submitFormulario(e) {
    e.preventDefault();
    if (!this.validateForm()) {
      console.error("campos vacíos");
      return 0;
    }
    const postData = this.state.pqrsdData;
    this.props.submitForm({ ...postData });
  }

  render() {
    const mensajeError = this.state.mensaje;
    return (
      <div className="container">
        {/* <p  className="text-center">Solicitud N°{this.state.pqrsdData.no_radicado}</p> */}
        <p className="text-center">Solicitud N°{this.props.no_radicado}</p>
        { mensajeError.length !== 0 && <AlertError mensaje={mensajeError   } />}
        <form
          onSubmit={this.submitFormulario}
          className="row align-items-start"
        >
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre_solicitante"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Nombre del solicitante"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Celular</label>
              <input
                type="text"
                name="telefono"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="ej. 3111111111"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                name="direccion"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Dirección"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dependencia competente</label>
              <input
                type="text"
                name="dependencia"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Dependencia"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">descripcion</label>
              <input
                type="text"
                name="descripcion"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Dependencia"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">tramites</label>
              <input
                type="text"
                name="tramites"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Dependencia"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">n_of_respuesta</label>
              <input
                type="text"
                name="n_of_respuesta"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Dependencia"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">num_guia</label>
              <input
                type="text"
                name="num_guia"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Dependencia"
              />
            </div>
            <div>
              {/* Campos automáticos */}
              <div className="form-text">
                Fecha de creación: {this.state.f_recibido}
              </div>
              <div className="form-text">
                Término para dar Respuesta: {this.state.ter_respuesta} días
                habiles
              </div>
              <div className="form-text">
                Fecha de posible respuesta: {this.state.t_respuesta}{" "}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="correo"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de solicitud</label>
              <input
                type="text"
                name="t_pqrsd"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mecanismo de Recepción</label>
              <input
                type="text"
                name="mec_recepcion"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Entidad</label>
              <input
                type="text"
                name="entidad"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Email"
              />
            </div>
            <div>
              <label className="form-label">
                Adjuntar documento de Solicitud
              </label>
              <input
                type="text"
                name="doc_solicitud"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="no hay archivo seleccionado"
              />
            </div>
            <div>
              <label className="form-label">tip_notificacion</label>
              <input
                type="text"
                name="tip_notificacion"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="no hay archivo seleccionado"
              />
            </div>
            <div>
              <label className="form-label">emp_transporte</label>
              <input
                type="text"
                name="emp_transporte"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="no hay archivo seleccionado"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-orange-institucional text-white btn-xs"
              data-bs-dismiss="modal"
              onClick={ () => this.setState({mensaje:''})}
            >
              Cancelar
            </button>
            <input
              type="submit"
              className="btn btn-institucional text-white btn-xs"
              value="Guardar PQRSD"
            />
          </div>
        </form>
      </div>
    );
  }
}

import axios from "axios";
import React, { Component } from "react";
import AlertError from "./AlertError";
import SelectComponent from "./SelectComponent";
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
      tPqrsd:[],
      mecaRecep:[],
      Dependencias:[],
      EmpTransporte:[],
      EstadosPqrsd:[],
      Tramites:[],
      mensaje: "",
      t_respuesta:
        time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear(), // comento esto porque en la petición no se estaba mandando este dato
      pqrsdData: {
        no_radicado: today.getTime().toString(),
        f_recibido: new Date(),
        t_pqrsd: "",
        dias_respuesta: null,
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
        status: "En tramite",
      },
    };
    this.manejarInput = this.manejarInput.bind(this);
    this.submitFormulario = this.submitFormulario.bind(this);
    this.getInfoTiposPqrsd = this.getInfoTiposPqrsd.bind(this);
  }
  componentDidMount(){
    this.getInfoTiposPqrsd()
    this.getInfoMecanismosRecepcion()
    this.getInfoDependencias()
    this.getInfoTramites()
}

  manejarInput(e) {
    const { name, value } = e.target;
    const {...pqrsd} = this.state.pqrsdData;
    if (name === "t_pqrsd") {
      const { n_dias } = value
        ? this.state.tPqrsd.find((data) => data.name === value)
        : null;
      Object.assign(pqrsd, { dias_respuesta: n_dias });
    }
    this.setState({
      pqrsdData: {
        ...pqrsd,
        [name]: value,
      },
    });
  }

  //obtener tipos de pqrsd
  getInfoTiposPqrsd() {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_HOST_API}/api/Tipospqrsd`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ tPqrsd: response.data });
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

  //obtener Mecanismos de Recepción
  getInfoMecanismosRecepcion() {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_HOST_API}/api/Mecanismos-Recepcion`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ mecaRecep: response.data });
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

  //obtener Dependencias
  getInfoDependencias() {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_HOST_API}/api/Dependencias`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ Dependencias: response.data });
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

//obtener Tramites
getInfoTramites(){
  const token = localStorage.getItem('auth-token');
  axios.get(`${process.env.REACT_APP_HOST_API}/api/Tramites`,{
      headers: {'auth-token': token}
  }).then(response => {
      this.setState({Tramites: response.data})
  }).catch(err =>{
      this.setState({ mensaje: err.response.data})
  });
}

  validateForm() {
    console.log(this.state.tPqrsd);
    const pqrsdData = this.state.pqrsdData;
    const fieldsNotEmpty = [
      "nombre_solicitante",
      "entidad",
      "direccion",
      "t_pqrsd",
    ];
    const filterEmpty = fieldsNotEmpty.filter(
      (key) => pqrsdData[key].length === 0
    );
    //si el arreglo filterEmpty es mayor que cero entonces hay campos obligatorios vacíos
    if (filterEmpty.length !== 0) {
      const mensaje = `Campos obligatorios vacíos: ${filterEmpty.join()}`;
      this.setState({ mensaje });
      return false;
    }
    this.setState({ mensaje: "" });
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
        {mensajeError.length !== 0 && <AlertError mensaje={mensajeError} />}
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
              <select
                name="dependencia"
                className="form-select"
                onChange={this.manejarInput}
              >
                <option key="0" value="Seleccione uno" defaultValue>
                  Seleccione una opción
                </option>
                {this.state.Dependencias.map((res) => (
                  <option key={res.name} value={res.name}>
                    {res.name}
                  </option>
                ))}
                <option key="otros" value="Otros" defaultValue>
                  Otros
                </option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input
                type="text"
                name="descripcion"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Descripción de la Pqrsd"
              />
            </div>
            

            <div>
              {/* Campos automáticos */}
              <div className="form-text">
                Fecha de creación:{" "}
                {this.state.pqrsdData.f_recibido.toLocaleDateString(
                  "zh-Hans-CN"
                )}
              </div>
              {
                //Esta sección sólo se visualiza si hay días de respuesta para la pqrsd
                !!this.state.pqrsdData.dias_respuesta &&
                <section>
                  <div className="form-text">
                    Término para dar Respuesta:{" "}
                    {this.state.pqrsdData.dias_respuesta} días hábiles
                  </div>
                  <div className="form-text">
                    Fecha de posible respuesta: {this.state.t_respuesta}{" "}
                  </div>
                </section>
              }
            </div>
          </div>
          <div className="col">
          <div className="mb-3">
              <label className="form-label">Tramite en SUIT al que pertenece</label>
              <select
                name="tramites"
                className="form-select"
                onChange={this.manejarInput}
              >
                <option key="0" value="Seleccione uno" defaultValue>Seleccione una opción</option>
                {this.state.Tramites.map(res => <option key={res.name} value={res.name}>{res.codigo} - {res.name}</option>)}
                <option key="Ninguno" value="Ninguno" defaultValue>Ninguno</option>
                </select>
            </div>
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
              <select
                name="t_pqrsd"
                className="form-select"
                onChange={this.manejarInput}
              >
                <option key="0" value="" defaultValue>
                  Seleccione una opción
                </option>
                {this.state.tPqrsd.map((res) => (
                  <option key={res.name} value={res.name}>
                    {res.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Mecanismo de Recepción</label>
              <select
                name="mec_recepcion"
                className="form-select"
                onChange={this.manejarInput}
              >
                <option key="0" value="Seleccione uno" defaultValue>
                  Seleccione una opción
                </option>
                {this.state.mecaRecep.map((res) => (
                  <option key={res.name} value={res.name}>
                    {res.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Entidad</label>
              <input
                type="text"
                name="entidad"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="Entidad del Solicitante"
              />
            </div>
            {/* <div>
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
            <div className="mb-3">
              <label className="form-label">Tipo de Notificación</label>
              <input
                type="text"
                name="tip_notificacion"
                className="form-control"
                onChange={this.manejarInput}
                placeholder="no hay archivo seleccionado"
              />
            </div>*/}


          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-orange-institucional text-white btn-xs"
              data-bs-dismiss="modal"
              onClick={() => this.setState({ mensaje: "" })}
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

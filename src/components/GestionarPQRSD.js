import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import axios from "axios";

class GestionarPQRSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EmpTransporte: [],
      EstadosPqrsd: [],
      TiposNotificacion: [],
      mensaje: "",
      fieldManaged: {
        observaciones: "",
        emp_transporte: "",
        status: "",
        num_guia: "",
        tip_notificacion: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePqrsdManaged = this.handlePqrsdManaged.bind(this);
  }
  componentDidMount() {
    this.setFieldManaged();
    this.getInfoEmpresasTransporte();
    this.getInfoEstadosPqrsd();
    this.getInfoTiposNotificacion();
  }

  setFieldManaged() {
    const {
      observaciones,
      emp_transporte,
      status,
      num_guia,
      tip_notificacion,
    } = this.props.pqrsdToManage;
    this.setState({
      fieldManaged: {
        observaciones,
        emp_transporte,
        status,
        num_guia,
        tip_notificacion,
      },
    });
  }

  handlePqrsdManaged(e) {
    e.preventDefault();
    const { ...fieldManaged } = this.state.fieldManaged;
    const { _id, ...pqrsdToManage } = this.props.pqrsdToManage;

    //se pasa el no de radicado y los campos de administración gestionados al componente padre
    Object.assign(pqrsdToManage, fieldManaged);
    console.log(pqrsdToManage);
    this.props.handlePqrsdManaged(_id, pqrsdToManage);
    this.props.history.push("/Pqrsd/Listado");
  }
  verifyForm() {
    //TODO verificación del formulario
  }
  handleChange(e) {
    const { name, value } = e.target;
    const { ...fieldManaged } = this.state.fieldManaged;
    this.setState({
      fieldManaged: {
        ...fieldManaged,
        [name]: value,
      },
    });
    console.log(this.state.fieldManaged);
  }

  //obtener Empresas Transportadoras
  getInfoEmpresasTransporte() {
    const token = localStorage.getItem("auth-token");
    axios
      .get("http://localhost:5000/api/Empresas-Transportadoras", {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ EmpTransporte: response.data });
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

  //obtener Estados de Pqrsd
  getInfoEstadosPqrsd() {
    const token = localStorage.getItem("auth-token");
    axios
      .get("http://localhost:5000/api/Estados-Pqrsd", {
        headers: { "auth-token": token },
      })
      .then((response) => {
        this.setState({ EstadosPqrsd: response.data });
      })
      .catch((err) => {
        this.setState({ mensaje: err.response.data });
      });
  }

  //obtener Tipos de Notificación
  async getInfoTiposNotificacion() {
    const token = localStorage.getItem("auth-token");
    const response = await fetch(
      "http://localhost:5000/api//Tipos-Notificacion",
      {
        method: "GET",
        headers: { "auth-token": token },
      }
    );
    if (!response.ok) {
      console.error(response);
      return 0;
    }
    const data = await response.json();
    this.setState({ TiposNotificacion: data });
  }

  render() {
    const data = {
      fecha_creación: new Date().toLocaleDateString(),
      posible_respuesta: new Date().toLocaleDateString(),
    };
    const { pqrsdToManage } = this.props;
    return (
      <form className="container" onSubmit={this.handlePqrsdManaged}>
        {
          //redirección: si el objeto this.props.pqrsdToManage está vacío entonces redirige hacia /Pqrsd/Listado
          Object.keys(pqrsdToManage).length === 0 && (
            <Redirect to="/Pqrsd/Listado" />
          )
        }
        <div className="row align-items-start">
          <p className="text-center">Solicitud N°{pqrsdToManage.no_radicado}</p>
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                disabled
                type="text"
                className="form-control"
                value={pqrsdToManage.nombre_solicitante}
                placeholder="No registrado"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Celular</label>
              <input
                disabled
                type="text"
                className="form-control"
                value={pqrsdToManage.telefono}
                placeholder="No registrado"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                disabled
                type="text"
                className="form-control"
                value={pqrsdToManage.direccion}
                placeholder="No registrado"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dependencia competente</label>
              <input
                disabled
                type="text"
                className="form-control"
                placeholder="No Registrado"
                value={pqrsdToManage.dependencia}
              />
            </div>
            <div>
              {/* Campos automáticos */}
              <div className="form-text">
                Fecha de creación:{" "}
                {new Date(pqrsdToManage.f_recibido).toLocaleDateString(
                  "zh-Hans-CN"
                )}
              </div>
              <div className="form-text">
                Término para dar Respuesta: {pqrsdToManage.dias_respuesta} días
                hábiles
              </div>
              <div className="form-text">
                Fecha de posible respuesta: {data.posible_respuesta}{" "}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                disabled
                type="email"
                className="form-control"
                placeholder="No registrado"
                value={pqrsdToManage.correo}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de solicitud</label>
              <input
                disabled
                type="email"
                className="form-control"
                placeholder="Seleccione"
                value={pqrsdToManage.t_pqrsd}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mecanismo de Recepción</label>
              <input
                disabled
                type="email"
                className="form-control"
                placeholder="No registrado"
                value={pqrsdToManage.mec_recepcion}
              />
            </div>
            {/* <div className="mb-3 d-flex justify-content-center align-items-center pt-4">
              <a
                target="_blank"
                href="#"
                className="btn btn-block btn-institucional text-white btn-xs mt-2 w-100 p-lg-2"
              >
                Ver documento de la solicitud
              </a>
            </div> */}
          </div>
        </div>
        <div className="pt-3">
          <hr />
        </div>

        {/* *********************Sección de Gestión******************** */}

        <section className="container">
          <h3 className="text-blue-institucional mt-4 text-center">
            Sección de gestión
          </h3>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Estado de la Solicitud</label>
                <select
                  value={this.state.fieldManaged.status}
                  name="status"
                  className="form-select"
                  onChange={this.handleChange}
                >
                  <option key="0" value="En tramite" defaultValue>
                    En tramite
                  </option>
                  {this.state.EstadosPqrsd.map((res) => (
                    <option key={res.name} value={res.name}>
                      {res.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Empresa de Transporte</label>
                <select
                  name="emp_transporte"
                  className="form-select"
                  value={this.state.fieldManaged.emp_transporte}
                  onChange={this.handleChange}
                >
                  <option key="0" value="" defaultValue>
                    Seleccione una opción
                  </option>
                  {this.state.EmpTransporte.map((res) => (
                    <option key={res.name} value={res.name}>
                      {res.name}
                    </option>
                  ))}
                  <option key="otros" value="Otros" defaultValue>
                    Otra
                  </option>
                  <option key="Ninguna" value="Ninguna" defaultValue>
                    Ninguna
                  </option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Numero de Guía</label>
                <input
                  value={this.state.fieldManaged.num_guia}
                  type="number"
                  name="num_guia"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Ej 100, 300 etc..."
                />
              </div>

            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Tipo de Notificación</label>
                <select
                  name="tip_notificacion"
                  className="form-select"
                  value={this.state.fieldManaged.tip_notificacion}
                  onChange={this.handleChange}
                >
                  <option key="0" value="">
                    Seleccione una opción
                  </option>
                  {this.state.TiposNotificacion.map((res) => (
                    <option key={res.name} value={res.name}>
                      {res.name}
                    </option>
                  ))}
                  <option key="Otro" value="Otro" defaultValue>
                    Otra
                  </option>
                  <option key="Ninguna" value="Ninguna" defaultValue>
                    Ninguna
                  </option>
                </select>
              </div>

              <div className="mt-3 mb-3">
                <label className="form-label">Observaciones</label>
                <textarea
                  name="observaciones"
                  value={this.state.fieldManaged.observaciones}
                  onChange={this.handleChange}
                  type="text-area"
                  className="form-control"
                  placeholder="Observaciones"
                ></textarea>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="mb-3">
            <label className="form-label">
              Adjuntar documento de Respuesta
            </label>
            <input
              type="file"
              className="form-control"
              placeholder="no hay archivo seleccionado"
            />
          </div> */}
        <div className="modal-footer">
          <Link to="/Pqrsd/Listado">
            <button
              type="button"
              className="btn btn-orange-institucional text-white btn-xs"
            >
              Cancelar
            </button>
          </Link>
          <button className="btn btn-institucional text-white btn-xs">
            Enviar Actualización
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter((props) => <GestionarPQRSD {...props} />);

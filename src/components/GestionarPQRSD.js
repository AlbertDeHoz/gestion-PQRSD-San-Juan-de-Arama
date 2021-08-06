import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

class GestionarPQRSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldManaged: {
        observaciones: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePqrsdManaged = this.handlePqrsdManaged.bind(this);
  }
  componentDidMount() {
    this.setState({
      fieldManaged: {
        observaciones: this.props.pqrsdToManage.observaciones,
      },
    });
  }

  handlePqrsdManaged(e) {
    e.preventDefault();
    const { ...fieldManaged } = this.state.fieldManaged;
    const { ...pqrsdToManage } = this.props.pqrsdToManage;
    const { _id } = pqrsdToManage;

    //se pasa el no de radicado y los campos de administración gestionados al componente padre
    Object.assign(pqrsdToManage,fieldManaged);
    console.log(pqrsdToManage)
    this.props.handlePqrsdManaged( _id, pqrsdToManage );
    this.props.history.push("/Pqrsd/Listado");
  }
  verifyForm() {
    //TODO verificación del formulario
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      fieldManaged: {
        [name]: value,
      },
    });
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
                {new Date(pqrsdToManage.f_recibido).toLocaleDateString('zh-Hans-CN')}
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
            <div className="mb-3 d-flex justify-content-center align-items-center pt-4">
              <a
                target="_blank"
                href="#"
                className="btn btn-block btn-institucional text-white btn-xs mt-2 w-100 p-lg-2"
              >
                Ver documento de la solicitud
              </a>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <hr />
        </div>
        <h3 className="text-blue-institucional mt-4 text-center">
          Sección de gestión
        </h3>
        <div className="row align-items-start">
          <div className="mt-3 mb-3">
            <label className="form-label">Observaciones</label>
            <input
              name="observaciones"
              value={this.state.fieldManaged.observaciones}
              onChange={this.handleChange}
              type="text-area"
              className="form-control"
              placeholder="Observaciones"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Adjuntar documento de Respuesta
            </label>
            <input
              type="file"
              className="form-control"
              placeholder="no hay archivo seleccionado"
            />
          </div>
        </div>
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

import React, { Component } from 'react'
import axios from 'axios'
export default class FormNewPQRSD extends Component {
    constructor(){
        super();
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = new Date();
        time.setDate(time.getDate() + 15);
        this.state = {
            user: {},
            no_radicado: today.getTime,
            f_recibido: date,
            t_pqrsd: '',
            ter_respuesta: '15',
            t_respuesta: time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear(),
            plazo_respuesta: time,
            nombre_solicitante: '',
            entidad: '',
            direccion: '',
            correo:'',
            telefono: '',
            descripcion: 'descripcion',
            mec_recepcion: '',
            tramites: 'tramite',
            dependencia: '',
            doc_solicitud: 'url',
            n_of_respuesta: '',
            f_respuesta: time,
            tip_notificacion: '',
            emp_transporte: '',
            num_guia: '',
            op_respuesta: '',
            observaciones: '',
            aux_responsable: '',
            doc_respuesta: 'url',
            status:'',
            mensaje:''
        };
    this.manejarInput = this.manejarInput.bind(this);
    }

    manejarInput(e){
        const{value, name} = e.target
        this.setState({[name]: value});
        console.log(this.state);
    }

    componentDidMount(){
        this.getInfo()
    }
   

    getInfo(){
        const token = localStorage.getItem('auth-token');
        axios.get('http://localhost:5000/api/user/userinfo',{
            headers: {'auth-token': token}
        }).then(response => {
            this.setState({user: response.data})
        }).catch(err =>{
            this.setState({ mensaje: err.response.data})
        });
    }

    submitFormulario = async e => {
        e.preventDefault();
        let postData = {
            no_radicado: this.state.no_radicado,
            t_pqrsd: this.state.t_pqrsd,
            plazo_respuesta: this.state.plazo_respuesta,
            nombre_solicitante: this.state.nombre_solicitante,
            entidad: this.state.entidad,
            direccion: this.state.direccion,
            correo: this.state.correo,
            telefono: this.state.telefono,
            descripcion: this.state.descripcion,
            mec_recepcion: this.state.mec_recepcion,
            tramites: this.state.tramites,
            dependencia: this.state.dependencia,
            doc_solicitud: this.state.doc_solicitud,
            n_of_respuesta: this.state.n_of_respuesta,
            f_respuesta: this.state.f_respuesta,
            tip_notificacion: this.state.tip_notificacion,
            emp_transporte: this.state.emp_transporte,
            num_guia: this.state.num_guia
        }
        const token = localStorage.getItem('auth-token')
        var headers = {
            'auth-token': token
        }

        axios.post(`http://localhost:5000/api/pqrsd/create/${this.state.user._id}`, postData, {
        headers: headers
        }).then(response =>{
            this.setState({mensaje: response.data.mensaje});
        }).catch(err => {
            this.setState({mensaje: err.response.data});
        })
    }

    render() {
    return (
        <div className="container">
        <p  className="text-center">Solicitud N°{this.state.no_radicado}</p>
        {
            this.state.mensaje !== ''?(
                <div className="alert alert-danger" role="alert">
                                    {this.state.mensaje}
                                </div>
                            ):''
                        }
        <form onSubmit={this.submitFormulario} className="row align-items-start">
          <div className="col">
              <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" name="nombre_solicitante" className="form-control" onChange={this.manejarInput} placeholder="Nombre del solicitante" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Celular</label>
                  <input type="text" name="telefono" className="form-control" onChange={this.manejarInput} placeholder="ej. 3111111111" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input type="text" name="direccion" className="form-control" onChange={this.manejarInput} placeholder="Dirección" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Dependencia competente</label>
                  <input type="text" name="dependencia" className="form-control" onChange={this.manejarInput} placeholder="Dependencia" />
              </div>
              <div className="mb-3">
                  <label className="form-label">descripcion</label>
                  <input type="text" name="descripcion" className="form-control" onChange={this.manejarInput} placeholder="Dependencia" />
              </div>
              <div className="mb-3">
                  <label className="form-label">tramites</label>
                  <input type="text" name="tramites" className="form-control" onChange={this.manejarInput} placeholder="Dependencia" />
              </div>
              <div className="mb-3">
                  <label className="form-label">n_of_respuesta</label>
                  <input type="text" name="n_of_respuesta" className="form-control" onChange={this.manejarInput} placeholder="Dependencia" />
              </div>
              <div className="mb-3">
                  <label className="form-label">num_guia</label>
                  <input type="text" name="num_guia" className="form-control" onChange={this.manejarInput} placeholder="Dependencia" />
              </div>
              <div>
                  {/* Campos automáticos */}
                  <div  className="form-text">Fecha de creación: {this.state.f_recibido}</div>
                  <div  className="form-text">Término para dar Respuesta: {this.state.ter_respuesta} días habiles</div>
                  <div  className="form-text">Fecha de posible respuesta: {this.state.t_respuesta} </div>
              </div>
          </div>
          <div className="col">
              <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="correo" className="form-control" onChange={this.manejarInput} placeholder="Email" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Tipo de solicitud</label>
                  <input type="text" name="t_pqrsd" className="form-control" onChange={this.manejarInput} placeholder="Email" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Mecanismo de Recepción</label>
                  <input type="text" name="mec_recepcion" className="form-control" onChange={this.manejarInput}  placeholder="Email" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Entidad</label>
                  <input type="text" name="entidad" className="form-control" onChange={this.manejarInput} placeholder="Email" />
              </div>
              <div>
                  <label className="form-label">Adjuntar documento de Solicitud</label>
                  <input type="text" name="doc_solicitud" className="form-control" onChange={this.manejarInput} placeholder="no hay archivo seleccionado" />
              </div>
              <div>
                  <label className="form-label">tip_notificacion</label>
                  <input type="text" name="tip_notificacion" className="form-control" onChange={this.manejarInput} placeholder="no hay archivo seleccionado" />
              </div><div>
                  <label className="form-label">emp_transporte</label>
                  <input type="text" name="emp_transporte" className="form-control" onChange={this.manejarInput} placeholder="no hay archivo seleccionado" />
              </div>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-orange-institucional text-white btn-xs" data-bs-dismiss="modal">Cancelar</button>
              <input type="submit" className="btn btn-institucional text-white btn-xs" value="Guardar PQRSD"  />
          </div>
      </form>
        </div>
    );
  };
}
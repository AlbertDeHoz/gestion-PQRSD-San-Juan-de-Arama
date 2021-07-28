import React, { Component } from 'react'
import axios from 'axios'

export default class UserInfo extends Component {

    constructor(){
        super();
        this.state = {
            user: {},
            name: '',
            file: null,
            email: '',
            mensaje: ''
        };
        this.manejarInput = this.manejarInput.bind(this);
        this.submitFormularioDatos = this.submitFormularioDatos.bind(this);
        this.submitFormularioFotos = this.submitFormularioFotos.bind(this);
        this.onChangeArchivo = this.onChangeArchivo.bind(this);
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

    manejarInput(e){
        const{value, name} = e.target
        if(value !== '')
        this.setState({[name]: value});
    }

    submitFormularioDatos = async e => {
        e.preventDefault();
        let postData = {
            name: this.state.name!==''?(this.state.name):(this.state.user.name),
            email: this.state.email!==''?(this.state.email):(this.state.user.email),
        }
        const token = localStorage.getItem('auth-token')
        var headers = {
            'auth-token': token
        }
        axios.post(`http://localhost:5000/api/user/update/${this.state.user._id}`, postData, {
            headers: headers
        }).then(response =>{
            this.setState({mensaje: response.data.mensaje});
        }).catch(err => {
            this.setState({mensaje: err.response.data});
        })
    }

    onChangeArchivo(e){
        this.setState({file: e.target.files[0]});
    }

    submitFormularioFotos(e) {
        e.preventDefault()
        const token = localStorage.getItem('auth-token');
        const formData = new FormData();
        formData.append("imgPerfil", this.state.file)
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
                'auth-token': token
            }
        }
        axios.post('http://localhost:5000/api/user/upload',formData, config).then(response =>{
            this.setState({mensaje: response.data.mensaje});
            this.getInfo();
        }).catch(err =>{
            this.setState({mensaje: err.data.mensaje})
        })
    }

    render() {
        let array = this.state.user.pqrsds
        return (
            <div>
                <div className="content-wrapper">
                    <div className="col-md-6 offset-md-3 pt-5">
                        <div className="card card-body">
                            <div className="text-center mb-2">
                                <div className="rounded-circle d-block m-auto" style={{backgroundImage:`url(${this.state.user.avatar})`, height: '150px', width: '150px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center', border: '4px solid #FF9425'}}></div>
                            <h5 className="font-weight-bold">Usuario {this.state.user.name}</h5>
                            <p>{this.state.user.email}</p>
                            </div>
                            <div>
                                {
                                    this.state.mensaje!==''?(
                                        <div className="alert alert-primary" role="alert">
                                            {this.state.mensaje}
                                        </div>
                                    ):''
                                }
                            </div>
                            <form onSubmit={this.submitFormularioDatos}>
                                <div className="form-floating mb-4">
                                    <input type="text" name="name" className="form-control" onChange={this.manejarInput} id="floatingInput" placeholder="Nombe de usuario" defaultValue={this.state.user.name} />
                                    <label htmlFor="floatingInput">Nuevo Nombre</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="email" name="email" className="form-control" onChange={this.manejarInput} id="floatingInput" placeholder="Email" defaultValue={this.state.user.email} />
                                    <label htmlFor="floatingInput">Nuevo Correo electrónico</label>
                                </div>
                                <input type="submit" value="Actualizar datos" className="btn bg-institucional text-white btn-xs w-100 p-2 mt-3" />
                            </form>
                            <hr/>
                            <form onSubmit={this.submitFormularioFotos}>
                                <div className="pt-3 mb-4">
                                    <span className=" text-md-start mr-4"><strong>Cambiar foto de perfil</strong></span>
                                    <input type="file" onChange={this.onChangeArchivo} name="imgPerfil" />
                                </div>
                                    <input type="submit" value="Actualizar foto" className="btn bg-institucional text-white btn-xs w-100 p-2 mt-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

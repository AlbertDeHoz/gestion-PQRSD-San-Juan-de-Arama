import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password:'',
            mensaje:''
        };
    this.manejarInput = this.manejarInput.bind(this);
    }

    manejarInput(e){
        const{value, name} = e.target
        this.setState({[name]: value});
        console.log(this.state);
    }

    submitFormulario = async e => {
        e.preventDefault();
        let postData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`${process.env.REACT_APP_HOST_API}/api/user/register`, postData, {

        }).then(response =>{
            this.setState({mensaje: response.data.mensaje});
        }).catch(err => {
            this.setState({mensaje: err.response.data});
        })
    }

    render() {
        return (
            <div> 
                <div className="col-md-6 offset-md-3 pt-5">
                    <div className="card card-body">
                        <h4>Registro de Usuario</h4>
                        {
                            this.state.mensaje !== ''?(
                                <div className="alert alert-danger" role="alert">
                                    {this.state.mensaje}
                                </div>
                            ):''
                        }
                        <form onSubmit={this.submitFormulario}>
                            <div className="form-floating mb-4">
                                <input type="text" name="name" className="form-control" onChange={this.manejarInput} id="floatingInput" placeholder="Ingrese su nombre" />
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="email" name="email" className="form-control" onChange={this.manejarInput} id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" name="password" onChange={this.manejarInput} id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                            <input type="submit" value="Registrar Usuario" className="btn bg-institucional text-white btn-xs w-100 p-2 mt-3" />
                            
                            <div className="text-center">
                                <Link className="text-orange-institucional btn btn-light btn-xs w-100 p-2 mt-3" data-toggle="tooltip" data-placement="top" title="Registrate ahora" to="/">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

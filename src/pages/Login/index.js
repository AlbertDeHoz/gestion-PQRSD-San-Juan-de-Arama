import React, { Component } from 'react'
import axios from 'axios';

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            mensaje: '',
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
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/api/user/login', postData, {

        }).then(response =>{
            localStorage.setItem('auth-token', response.data.token);
            this.props.history.push("/Pqrsd")
            //localStorage.setItem('auth-token', response.data.token);
            this.setState({mensaje: response.data.mensaje});
        }).catch(err => {
            this.setState({mensaje: err.response.data});
        })
    }

    render() {
        return (
            <div className="container w-25 mx-auto pt-5">
                <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
                {/* Custom styles for this template */}
                <link href="signin.css" rel="stylesheet" />
                <main className="form-signin">
                    <form onSubmit={this.submitFormulario}>
                    <div className="text-center">
                    <img className="img-circle elevation-1 center" src="dist/img/Logosj.png" width="150" />
                    <h4 className="h3 mb-3 mt-5 fw-normal">Por favor inicie sesion</h4>
                    {
                            this.state.mensaje !== ''?(
                                <div className="alert alert-danger" role="alert">
                                    {this.state.mensaje}
                                </div>
                            ):''
                        }
                    </div>
                    <div className="form-floating mb-4">
                        <input type="email" name="email" className="form-control" onChange={this.manejarInput} id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" name="password" onChange={this.manejarInput} id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="text-center">
                        <input value="Iniciar Sesion" className="btn bg-institucional text-white btn-xs w-100 p-2 mt-3" type="submit" />
                    </div>
                    <p className="mt-5 mb-3 text-muted">PQRSDS San Juan de Arama ©2021</p>
                    </form>
                </main>
            </div>
        )
    }
}

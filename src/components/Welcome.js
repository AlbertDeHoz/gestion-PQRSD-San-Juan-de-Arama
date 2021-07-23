import React, { Component } from 'react'
import logo from '../img/LogoSJ.png'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                        <div className="content-header">
                            <div className="text-center">
                                <div className="bg-white shadow-lg w-75 h-75 rounded-lg mx-auto p-xxl-5 my-xxl-5">
                                    <div className="text-center mb-5">
                                        <img src={logo} alt="Recuperemos San Juan" className="img-circle elevation-2" width="160"/>
                                    </div>
                                    <span className="font-weight-normal text-xl">Bienvenido al</span>
                                    <h1 className="font-weight-bold text-xl">Sistema de PQRSDS San Juan de Arama</h1>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

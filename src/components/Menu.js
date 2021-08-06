import React, { Component } from 'react'
import logoMenu from '../img/LogoSJ.png'
import '../App.css';
import {
  Link,
  useLocation
} from "react-router-dom";
import axios from 'axios';

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
  
  render() {
    const url = window.location.pathname
      return (
          <div>
  <aside className="main-sidebar bg-institucional elevation-4">
    {/* Brand Logo */}
      <Link to="/Pqrsd" className="brand-link">
        <div className="d-flex">
          <img src={logoMenu} alt="Recuperemos San Juan" className="img-circle elevation-2" width="60"/>
          <div className="ml-3">
            <span className="text-md text-white font-weight-bold mt-3">Gestión de PQRSD <br/>San Juan de Arama</span>
          </div>
        </div>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel */}
        <Link to="/Pqrsd/userinfo" >
          <div className="user-panel mt-3 d-flex align-items-start">
            <div className="image">
            <div className="rounded-circle d-block" style={{backgroundImage:`url(${this.state.user.avatar})`, height: '40px', width: '40px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center',  border: '2px solid #FF9425'}}></div>
            </div>
            <div className="info mt-1">
              <p className="text-white">{this.state.user.name}</p>
            </div>
          </div>
        </Link>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/Pqrsd/Dashboard" className={`nav-link  text-white bg-active-option ${url == '/Pqrsd/Dashboard' ? "active-option":""}`}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Pqrsd/Listado" className={`nav-link text-white bg-active-option ${url == '/Pqrsd/Listado' ? "active-option":""}`}>
              <i className="nav-icon fas fa-table" />
                <p>Listado de PQRSDs</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link bg-active-option">
                <i className="nav-icon fas fa-copy text-light" />
                <p className="text-light">
                  Administración
                  <i className="fas fa-angle-left right text-light" />
                  {/* <span className="badge badge-info right">6</span> */}
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                    <Link to="/Pqrsd/admin-usuarios" className={`nav-link text-white bg-active-item ${url == '/Pqrsd/admin-usuarios' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <p>Gestión de Usuarios</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-tipos-PQRSD" className={`nav-link text-white bg-active-item ${url == '/Pqrsd/admin-tipos-PQRSD' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <p>Tipos de PQRSD</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-mecanismos-recepcion" className={`nav-link text-white bg-active-item d-flex align-items-center ${url == '/Pqrsd/admin-mecanismos-recepcion' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <div><p>Mecanismos de recepción</p></div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-dependencias" className={`nav-link text-white bg-active-item ${url == '/Pqrsd/admin-dependencias' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <p>Dependencias</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-tipos-notificacion" className={`nav-link text-white bg-active-item ${url == '/Pqrsd/admin-tipos-notificacion' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <p>Tipos de notificacion</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-empresas-transporte" className={`nav-link text-white bg-active-item d-flex align-items-center ${url == '/Pqrsd/admin-empresas-transporte' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <div><p>Empresas transportadoras</p></div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-tramites" className={`nav-link text-white bg-active-item ${url == '/Pqrsd/admin-tramites' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <p>Trámites</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pqrsd/admin-estados-pqrsd" className={`nav-link text-white bg-active-item d-flex align-items-center ${url == '/Pqrsd/admin-estados-pqrsd' ? "active-item":""}`}>
                      <i className="far fa-check-circle nav-icon" />
                      <div><p>Estados de PQRSD</p></div>
                    </Link>
                  </li>
                  <br/><br/>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
  }

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import Dashboard from '../pages/Dashboard';

const Menu = () => {
      const url = useLocation();
        return (
          <div>
  <aside className="main-sidebar bg-institucional elevation-4">
    {/* Brand Logo */}
      <Link to="/Dashboard" className="brand-link">
        <div className="d-flex">
          <img src="dist/img/Logosj.png" alt="Recuperemos San Juan" className="img-circle elevation-2" width="60"/>
          <div className="ml-3">
            <span className="text-md text-white font-weight-bold mt-3">Gestión de PQRSD <br/>San Juan de Arama</span>
          </div>
        </div>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block text-white">User Name</a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/Dashboard" className={`nav-link  text-white bg-active-option ${url.pathname == '/Dashboard' ? "active-option":""}`}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Listado" className={`nav-link text-white bg-active-option ${url.pathname == '/Listado' ? "active-option":""}`}>
              <i className="nav-icon fas fa-table" />
                <p>Listado de PQRSDs</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <div className="nav-link bg-active-option" style={{cursor: 'pointer'}}>
                <i className="nav-icon fas fa-copy text-light" />
                <p className="text-light">
                  Administración
                  <i className="fas fa-angle-left right text-light" />
                  {/* <span className="badge badge-info right">6</span> */}
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/admin-tipos-PQRSD" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-tipos-PQRSD' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Tipos de PQRSD</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-mecanismos-recepcion" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-mecanismos-recepcion' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Mecanismos de recepción</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-dependencias" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-dependencias' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Dependencias</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-tipos-notificacion" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-tipos-notificacion' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Tipos de notificacion</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-tiempos-respuesta" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-tiempos-respuesta' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Tiempos de respuesta</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-empresas-transporte" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-empresas-transporte' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Empresas transportadoras</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-tramites" className={`nav-link text-white bg-active-item ${url.pathname == '/admin-tramites' ? "active-item":""}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Trámites</p>
                  </Link>
                </li>
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
export default Menu;

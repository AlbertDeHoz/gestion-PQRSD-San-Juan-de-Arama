const FormNewPQRSD = () => {
    const data = {
        fecha_creación:new Date().toLocaleDateString(),
        id_radicado:"20211307001",
        posible_respuesta:new Date().toLocaleDateString(),
        termino_respuesta:"15"
  }
    return (
      <form className="container">
        <div className="row align-items-start">
        <p  className="text-center">Solicitud N°{data.id_radicado}</p>
          <div className="col">
              <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" placeholder="Persona que hace la solicitud"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Celular</label>
                  <input type="text" className="form-control" placeholder="Ej: 555 555 5555"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input type="text" className="form-control" placeholder="Ej: Kra00 #00-00"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Dependencia competente</label>
                  <select className="form-select" placeholder="Seleccione">
                      <option disabled selected>Seleccione</option>
                      <option>Despacho</option>
                      <option>Secretaría de Planeación e Infraestructura</option>
                      <option>Secretaría de Gobierno Seguridad y Convivencia</option>
                      <option>Secretaría de Desarrollo Económico y Social</option>
                      <option>Secretaría Financiera</option>
                  </select>
              </div>
              <div>
                  {/* Campos automáticos */}
                  <div  className="form-text">Fecha de creación: {data.fecha_creación}</div>
                  <div  className="form-text">Término para dar Respuesta: {data.termino_respuesta} días habiles</div>
                  <div  className="form-text">Fecha de posible respuesta: {data.posible_respuesta} </div>
              </div>
          </div>
          <div className="col">
              <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Ej: username@example.com"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Tipo de solicitud</label>
                  <select className="form-select" placeholder="Seleccione">
                      <option disabled selected>Seleccione</option>
                      <option>Petición</option>
                      <option>Queja</option>
                      <option>Reclamo</option>
                      <option>Solicitud de información</option>
                      <option>Sugerencia</option>
                  </select>
              </div>
              <div className="mb-3">
                  <label className="form-label">Mecanismo de Recepción</label>
                  <select className="form-select" placeholder="Seleccione">
                      <option disabled selected>Seleccione</option>
                      <option>Presencial</option>
                      <option>Correo electrónico</option>
                      <option>Página web</option>
                      <option>Verbal</option>
                      <option>Correo certificado</option>
                  </select>
              </div>
              <div>
                  <label className="form-label">Adjuntar documento de Solicitud</label>
                  <input type="file" className="form-control" placeholder="no hay archivo seleccionado" name="file"/>
              </div>
          </div>
        </div>
      </form>
    );
  };
export default FormNewPQRSD;
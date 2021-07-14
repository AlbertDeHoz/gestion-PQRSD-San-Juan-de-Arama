const FormGestionar = () => {
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
                  <input disabled type="text" className="form-control" value="Raul Esteban Benitez Enciso" placeholder="Persona que hace la solicitud"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Celular</label>
                  <input disabled type="text" className="form-control" value="3105706841" placeholder="Ej: 555 555 5555"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input disabled type="text" className="form-control" value="Cl 17 # 15 - 18" placeholder="Ej: Kra00 #00-00"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Dependencia competente</label>
                  <input disabled type="text" className="form-control" placeholder="Seleccione" value="Secretaría de Planeación e Infraestructura" />
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
                  <input disabled type="email" className="form-control" placeholder="Ej: username@example.com" value="estebanbenitez1996@gmail.com"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Tipo de solicitud</label>
                  <input disabled type="email" className="form-control" placeholder="Seleccione" value="Queja" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Mecanismo de Recepción</label>
                  <input disabled type="email" className="form-control" placeholder="Seleccione" value="Presencial" />
              </div>
              <div className="mb-3 d-flex justify-content-center align-items-center pt-4">
                  <a target="_blank" href="#" className="btn btn-block btn-institucional text-white btn-xs mt-2 w-100 p-lg-2">Ver documento de la solicitud</a>
              </div>
          </div>
        </div>
        <div className="pt-3"><hr/></div>
        <h3 className="text-blue-institucional mt-4 text-center">Sección de gestión</h3>
        <div className="row align-items-start">
            <div className="mt-3 mb-3">
                <label className="form-label">Observaciones</label>
                <input type="text-area" className="form-control" placeholder="Obseraciones"></input>
            </div>
            <div className="mb-3">
                  <label className="form-label">Adjuntar documento de Respuesta</label>
                  <input type="file" className="form-control" placeholder="no hay archivo seleccionado" />
              </div>
        </div>
      </form>
    );
  };
export default FormGestionar;
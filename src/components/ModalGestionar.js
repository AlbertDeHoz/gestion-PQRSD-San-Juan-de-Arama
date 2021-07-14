import FormGestionar from "./FormGestionar";

const ModalGestionar = () => {
    return (
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="modalGestionLabel">
              Gestionar PQRSD
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormGestionar data={FormGestionar.data}/>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-orange-institucional text-white btn-xs" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-institucional text-white btn-xs">Marcar como resuelta</button>
          </div>
        </div>
      </div>
    );
  };
  export default ModalGestionar;
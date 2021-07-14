import FormNewPQRSD from "./FormNewPQRSD";

const ModalAddNew = () => {
    return (
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="exampleModalLabel">
              Nueva PQRSD
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormNewPQRSD data={FormNewPQRSD.data}/>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-orange-institucional text-white btn-xs" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-institucional text-white btn-xs">Guardar PQRSD</button>
          </div>
        </div>
      </div>
    );
  };
  export default ModalAddNew;
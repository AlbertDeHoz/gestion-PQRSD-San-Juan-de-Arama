import FormNewPQRSD from "./FormNewPQRSD";

const ModalAddNew = (props) => {
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
            <FormNewPQRSD submitForm = {(e) => props.submitForm(e)}/>
          </div>
        </div>
      </div>
    );
  };
  export default ModalAddNew;
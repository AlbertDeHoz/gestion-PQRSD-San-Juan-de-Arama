const ButtonLaunchModalGestionar = (props) => {
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className={props.class}
          data-bs-toggle="modal"
          data-bs-target="#modalGestion"
        >
          <i class="fas fa-edit"></i> Gestionar
        </button>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="modalGestion"
          tabIndex="-1"
          aria-labelledby="modalGestionLabel"
          aria-hidden="true"
        >
          {props.children}
        </div>
      </div>
    );
  };
  export default ButtonLaunchModalGestionar;
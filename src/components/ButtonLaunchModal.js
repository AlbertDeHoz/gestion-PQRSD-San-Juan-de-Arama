const ButtonLaunchModal = (props) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className={props.class}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Crear Nueva PQRSD
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {props.children}
      </div>
    </div>
  );
};
export default ButtonLaunchModal;
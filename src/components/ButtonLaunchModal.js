const ButtonLaunchModal = (props) => {
  const str="nueva-pqrsd"
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className={props.class}
        data-bs-toggle="modal"
        data-bs-target={`#${props.modalId}`}
      >
      <i class={props.classIcon}></i>
        {props.name}
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={props.modalId}
        tabIndex="-1"
        aria-labelledby={`modal${props.modalId}`}
        aria-hidden="true"
      >
        {props.children}
      </div>
    </div>
  );
};
export default ButtonLaunchModal;
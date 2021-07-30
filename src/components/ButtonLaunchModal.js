import React,{Component} from 'react';
class ButtonLaunchModal  extends Component {
  constructor(props){
    super(props);
    this.state = { nRadicado: null }
    this.updateRadicado = this.updateRadicado.bind(this)
  }
  updateRadicado(){
    this.setState({nRadicado: new Date().getTime().toString()});
  }

  render(){
    //++++ esto se utiliza para poder mandar props a los props children
    const childrenWithProps = React.Children.map(
      this.props.children, (child, i) => {
        return React.cloneElement(child, { //this properties are available as a props in child components
          no_radicado : this.state.nRadicado,
          onClicking: this.onClicking,
          index: i
        });
      }
    );
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className={this.props.class}
          data-bs-toggle="modal"
          data-bs-target={`#${this.props.modalId}`}
          onClick = {this.updateRadicado}
        >
        <i class={this.props.classIcon}></i>
          {this.props.name}
        </button>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id={this.props.modalId}
          tabIndex="-1"
          aria-labelledby={`modal${this.props.modalId}`}
          aria-hidden="true"
        >
          {childrenWithProps}
        </div>
      </div>
    );
  }

};
export default ButtonLaunchModal;
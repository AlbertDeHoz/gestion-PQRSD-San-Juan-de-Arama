import React, { Component } from 'react'

export default class SelectComponent extends Component {
    constructor(props) {
    super(props);
    this.deleteTipoPqrsd = this.deleteTipoPqrsd.bind(this);
  }
    render() {
        return (
            <div>
                <option>{this.props.obj.name}</option>
            </div>
        )
    }
}

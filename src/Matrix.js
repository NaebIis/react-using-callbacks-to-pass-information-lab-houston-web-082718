import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      color: "#f00"
    };
  }
  // ----------------------------------------------
  changeColor = (nuColor, e) => {
    this.setState({
      color: nuColor
    });
    console.log(this.state.color);
  };

  currentColor = () => {
    return this.state.color;
  };
  // --------------------------------------------------
  genRow = vals =>
    vals.map((val, idx) => (
      <Cell
        key={idx}
        color={val}
        // ---------------------------------------------------
        currentColor={this.currentColor}
        // ---------------------------------------------------
      />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector
          // --------------------------------------------
          changeColor={this.changeColor.bind(this)}
          // --------------------------------------------
        />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};

// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  focusEvent = event => console.log("Good!")
  blurEvent = event => console.log("Hey! Eyes on me!")

  render() {
    return (
      <button
        onFocus = {this.focusEvent}
        onBlur = {this.blurEvent}
      >
      </button>
    );
  }

}

export default EyesOnMe;

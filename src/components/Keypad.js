// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  returnText = event => console.log(`Entering password...`)

  render() {
    return (
      <input type="password" onKeyUp={this.returnText}></input>
    );
  }

}

export default Keypad;

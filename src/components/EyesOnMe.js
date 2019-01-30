// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {


  focusHandle = (event) =>{
    console.log('Good!')
  }

  blurHandle = (event) =>{
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onBlur={this.blurHandle} onFocus={this.focusHandle}>Button </button>
    )
  }
}


export default EyesOnMe;

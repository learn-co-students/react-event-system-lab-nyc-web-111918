// Code Keypad Component Here
import React, { PureComponent } from 'react';

class Keypad extends PureComponent {

  constructor(props){
    super(props)

  }

  handleKeyUp = event => {
    console.log('Entering password...')
  }

  render(props){
    return (
      <input type="password" onKeyUp={this.handleKeyUp} />
    )
  }





}
export default Keypad

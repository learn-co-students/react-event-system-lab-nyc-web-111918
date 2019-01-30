// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

  handleOnKeyUp = () => console.log("Entering password...")


  render() {
    return (
      <input onKeyUp={this.handleOnKeyUp} type="password" placeholder="Enter password" />
    )
  }

}

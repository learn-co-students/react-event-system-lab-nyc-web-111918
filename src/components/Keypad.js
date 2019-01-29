// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component{

  constructor(){
    super()
  }

  changeHandler = () => {
    console.log("Entering password...")
  }

  render(){
    return (
      <form>
        <input type="password" onKeyUp={this.changeHandler}></input>
      </form>
    )
  }

}

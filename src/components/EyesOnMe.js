import React, { Component } from 'react'
// Code EyesOnMe Component Here
export default class EyesOnMe extends Component{
  constructor(){
    super()
  }
  clickHandler = () => {
    console.log("Good!")
  }
  blurHandler = () => {
    console.log("Hey! Eyes on me!")
  }
  render(){
    return (
      <form>
        <button type="button" onBlur={this.blurHandler} onFocus={this.clickHandler}>Button</button>
      </form>
    )
  }
}

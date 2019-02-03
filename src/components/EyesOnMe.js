// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {


  handleFocus = () => {
    console.log("Good!")
  }

  handleBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button type="submit" value="Submit" onFocus={this.handleFocus} onBlur={this.handleBlur}>Submit</button>
    )
  }

}

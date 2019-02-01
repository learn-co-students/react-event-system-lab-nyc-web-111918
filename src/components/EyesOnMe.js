// Code EyesOnMe Component Here
// Code Keypad Component Here
import React from 'react'

class EyesOnMe extends React.Component {



  onB = () => {
    console.log('Hey! Eyes on me!')
  }

  onF = () => console.log('Good!')


  render(){
    return (
      <button onFocus={this.onF} onBlur={this.onB} >Eyes on me, please!</button>
    )
  }

}

export default EyesOnMe;

// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
  constructor(props){
    super(props)

    this.state = {
      password: ""
    }
  }

  // this.state = {
  //   password: ""
  // }

  keyUpHandle = (event) =>{
    this.setState({
      password: console.log('Entering password...')
    })
  }

  render() {
    //console.log(this.props.value)
    //console.log(this.state)
    return (
      <input onKeyUp={this.keyUpHandle} type="password" />
    )

  }
}



export default Keypad

import React, { Component } from 'react';

class Keypad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }
  handleChange = event => {
    // console.log("handleChange this-context: ", this);
    // console.log("event: ", event);
    let pw = event.target.name
    let val = event.target.value
    this.setState({[pw]: val});
  }

  handleKeyUp = event => {
    // console.log(event.target)
    console.log('Entering password...');
  }
  render() {
    return (
      <div>
        <input name="password" onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="password" value={this.state.password}/>
      </div>
    );
  }

}

export default Keypad;

import React from 'react';

export default class Keypad extends React.Component{


  handleKeyUp=(e)=>{
    console.log('Entering password...');
  }

  render(){
    return (
      <div>
        <input
        onKeyUp={this.handleKeyUp} type="password"
        />
      </div>
    )
  }

}

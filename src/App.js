import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:5
    }
  }

  increment(){
    console.log("increment");
  }

  decrement(){
    console.log("decrement");
  }

  render() {
    return (
      <div >
         
         <button onClick = {this.increment}> + </button>
            <h2>count : {this.state.count}</h2>
         <button onClick = {this.decrement}> - </button>
      </div>
    );
  }
}

export default App;

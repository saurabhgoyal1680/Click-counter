import React from 'react';
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      numVal: 0
    }
  }

  plusOne(){
    var numVal = this.state.numVal + 1;
    this.setState({numVal});
  }

  minusOne(){
    var numVal = this.state.numVal - 1;
    this.setState({numVal});
  }

  reset(){
    this.setState({
      numVal:0
    });
  }

  render(){
    return (
      <div className="mainDiv">
        <Header />
        <div className="counter">
          <div className="numBox">
            {this.state.numVal}
          </div>
          <div className="btn-holder">
            <button onClick={() => this.plusOne()}>+</button>
            <button onClick={() => this.reset()}>@</button>
            <button onClick={() => this.minusOne()}>-</button>
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;

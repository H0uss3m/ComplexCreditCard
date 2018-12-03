import React, { Component } from 'react';
import Card from './card'
import './App.css';
import 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'',
      number:'',
      validTHRU:'****'
    }
  }
  changeName=(e)=>{
    this.setState({name:e.target.value})
  }
  changeNumber=(e)=>{
    this.setState({number:e.target.value})
  }
  changeValidTHRU=(e)=>{
    this.setState({validTHRU:e.target.value})
  }
  
  render() {
    return (<div className='body'>

    
      <div>
        <Card name={this.state.name} number={this.state.number} validTHRU={this.state.validTHRU} />
      </div>

        <div className='CreditCard'>
          <input type="text" placeholder="User Name" maxLength="20" onChange={this.changeName}/>
            <br></br>
          <input type="text" placeholder="Credit Card Number" maxLength="16" onChange={this.changeNumber}/>
            <br></br>
          <input type='text'placeholder='validTHRU' maxLength='4' onChange={this.changeValidTHRU}/>
        </div>
      </div>
    );
  }
}

export default App;

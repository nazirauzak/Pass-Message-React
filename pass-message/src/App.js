import React from 'react';
// import 'styles.css';
import './App.css';
import Passmessage from './components/PassMessage'

class  App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      values: "",
      alert: ""
    };
  }
  changed = (e) => {
    this.setState({inputValue: e.target.value})
  };
  submitted = () => {
    const { inputValue, alert} =this.state;
    if (inputValue) {
      this.setState({
        values: inputValue.toLowerCase(),
        inputValue: ''
      });
    }else {
      this.setState({alert: "Please Enter A Value To Pass"});
      setTimeout(() =>{
        this.setState({alert: ''});
      }, 1500);
    }
  }
  render() {
    const { inputValue, values, alert} = this.state;
    return (
      <div className='wrapper'>
     <h3>A Message You Would Like To Pass</h3>
      <div>
        <input
        type='text'
        id='input'
        value={inputValue}
        onCahnge={this.changed}/>
      <Passmessage function={this.submitted}/>
      <p className='alert'>{alert}</p>
      </div>
      <h3>Last Message Delivered</h3>
      <p className= 'messages'>{values}</p>
      </div>
    )
  }
}

export default App;

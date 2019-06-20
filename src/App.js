import React from 'react';
import './App.css';
import Info from './components/Info/Info';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      gender: 'female',
      age: -1,
    }
  }
  onSexChanged = (event) => {
    this.setState({
      gender: event.target.value
    })
    console.log(this.state.gender)
  }
  onAgeChanged = (event) => {
    this.setState({
      age: event.target.value
    })
    console.log(this.state.age)
  }
  render(){
    return (
      <div>
        <Info onAgeChanged={this.onAgeChanged} onSexChanged={this.onSexChanged}/>
      </div>
    );
  }
}

export default App;

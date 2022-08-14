import React, {Component} from 'react'
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import Home from './views/home/Home';
import Register from './components/register/Register';
import SignIn from './components/signin/SignIn';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //state variables
    }
  };

  componentDidMount() {
    axios.get('/api/hello')
      .then(res => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Register className='register'/>
          <SignIn/>
          <Home className='gallery'/>
        </header>
      </div>
    );
  }
};
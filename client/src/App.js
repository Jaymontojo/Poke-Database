import React, {Component} from 'react';
import Register from './components/Register/Register';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Register/>
      </div>
    )
  }
}


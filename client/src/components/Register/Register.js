import React, {Component} from 'react';
import './Register.css'

export default class Register extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="registration-container">
        <h1 className="registration-header">Create New User</h1>
        <form className="registration-form">
          <div>
            <label htmlFor="">Email</label>
            <input type="text" className="input-email" placeholder="email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" className="input-password" placeholder="password" />  
          </div>
          <button>Create User</button>
          <button>Login</button>
        </form>
      </div>
    )
  }
}
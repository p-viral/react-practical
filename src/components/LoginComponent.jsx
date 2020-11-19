import React from 'react';

const LoginComponent = () => {
  return (
    <div className="login">
      <div className="loginContainer">
      <h3>LOGIN</h3>
      <div className="formGroup">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
      </div>
      <input type="submit" className="btn" />
      </div>
    </div>
  )
}

export default LoginComponent;
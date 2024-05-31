// SignIn.js
import React from 'react';
import './signin.scss'

const SignIn = () => {
  return (
    <div id='signin'>
      <h2>Sign In</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder='email' />

        <label>Password:</label>
        <input type="password" placeholder='password' />

        <button className='signbtn' type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

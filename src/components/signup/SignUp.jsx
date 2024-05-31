// SignUp.js
import React from 'react';
import './signup.scss'

const SignUp = () => {
  return (
    <div id='signup'>
      <h2>Sign Up</h2>
      <form>
        <label>FirstName:</label>
        <input type="text" placeholder='firstname' />
        <label>LastName:</label>
        <input type="text" placeholder='lastname' />
        <label>Email:</label>
        <input type="email" placeholder='email' />

        <label>Password:</label>
        <input type="password" placeholder='password' />

        <label>Confirm Password:</label>
        <input type="password" placeholder='password' />

        <button className='signupbtn' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

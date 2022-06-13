import React from 'react';
import "./login.css";
import {Link} from 'react-router-dom';
import { useRef, useContext } from 'react';
import { Context } from '../../context/Context';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type:'LOGIN_START' });

    try {
      const res = await axios.post('/auth/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type:'LOGIN_SUCCESS', payload: res.data });
    } catch(err) {
      dispatch({ type:'LOGIN_FAILURE' });
      setError(true);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
            className="loginInput" 
            type="text" 
            placeholder="email" 
            ref={emailRef}
        />
        <label>Password</label>
        <input 
            className="loginInput" 
            type="password" 
            autoComplete="on"
            placeholder="password"
            ref={passwordRef} 
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        {error && <span className='err'>Incorrect email or password..</span>}
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>

    </div>
  );
}
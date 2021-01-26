import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import AuthGoogle from './AuthGoogle';
import Style from './LogInForm.module.css';

const choose = {
  Register: function register (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  Login: function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

const LogInForm=({windowchoose, hash})=> {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function sendData (e) {
    e.preventDefault();
    choose[windowchoose](email, password)
    .then( () =>{
      history.push('/Menu')
      })
    .catch((e) => {
      setError(e.message);
      setTimeout(() => {
        setError('')
      }, 4000)
    })
  }

  return (
    <div className={`${Style.background}`} id= {windowchoose}>
      <div className={`${Style.topDecor}`}></div>
      <div className={`${Style.logInContainer}`}>
        <h1 className={`${Style.title}`}>Log In</h1>
        <p className={`${Style.message}`}>
          {windowchoose === 'LogIn'?
          'LogIn to continue' : 'Create an account'}
        </p>
        <form onSubmit={sendData}>
        {error && <div className={`${Style.error}`}>{error}</div>}
          <div className={`mb-3 ${Style.inputContainer}`}>
            <label htmlFor="" className={`${Style.label}`}>Email</label>
            <input type='email' placeholder='Your email' value={email} onChange={(e) => {
            setEmail(e.target.value)}} className={`form-control ${Style.input}`} />
            <label htmlFor="" className={`${Style.label}`}>Password</label>
            <input type='password' placeholder='********' value={password} onChange={(e) => {
            setPassword(e.target.value)}} className={`form-control ${Style.input}`} />
          </div>
          <button className={`${Style.btn}`} >
            {windowchoose === 'LogIn'? 'LogIn' : 'Log In' }
          </button>
        </form>
        <AuthGoogle/>
        <p className={`${Style.change}`}>
          {windowchoose === 'LogIn'? //Aquí debo crear el Sign Up
          '¿Dont you have an account yet?' : '¿Have you already have an account?'}
          <Link to={hash} className={`row justify-content-center ${Style.link}`}>
          {windowchoose === 'LogIn'?
          'Register' : 'Sign Up '}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogInForm;

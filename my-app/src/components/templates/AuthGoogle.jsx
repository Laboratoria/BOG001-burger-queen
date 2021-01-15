import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Style from './LogInForm.module.css';
import googleIcon from '../atoms/assets/google-w.svg';

function authSocialMedia (){
  const googleProvider =new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
}

const Auth = () =>{
  let history= useHistory();
  function google (e) {
    e.preventDefault();
    authSocialMedia().then( () =>{
      history.push('/UserProfile')
    })
  }

  return(
    <div className={`${Style.googleContainer}`}>
      <p className={`${Style.o}`}>Or</p>
      <button onClick={google}>Login with<img src={googleIcon} className={`${Style.google}`} alt="googleLogIn"/></button>
    </div>
  )
}

export default Auth

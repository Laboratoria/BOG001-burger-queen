import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Link} from 'react-router-dom'
import Style from './profilebox.module.css';

const ProfileBox = ()=>{
  var user = firebase.auth().currentUser;
  var name, photoUrl;

  if (user != null) {
    name = user.displayName;
    photoUrl = user.photoURL;
  }

  return(
    <div className={`${Style.profileBox}`}>
      <Link to='/UserProfile'>
        <img className={`${Style.profilePhoto}`}src={photoUrl} alt="User Pic"/>
        <p className={`${Style.nameUser}`}>{name}</p>
      </Link>
    </div>
  )
}

export default ProfileBox;

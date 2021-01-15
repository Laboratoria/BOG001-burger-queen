import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Link} from 'react-router-dom';

const UserProfile = ()=>{

  let user = firebase.auth().currentUser;
  let name, photoUrl;

  if (user != null) {
    name = user.displayName;
    photoUrl = user.photoURL;
  }

  /*
  function linkToFirstView (){
    let category = document.getElementById('profile-select');
    category.addEventListener('onChange', function(){
    console.log('funcionnaaaa');
  })
    if (category === waiter) {
      return firstView= '/Menu';
    }
    else if (category === chef) {
      return firstView= '/ToPrepare';
    }
  }
  */
  //{firstView}

  //https://www.youtube.com/watch?v=TahbDflPa8E&ab_channel=SamLama

  const [optionProfileState, setOptionProfile] = useState('/Menu');//Initial state

  return(
    <div>
      <img src={photoUrl} alt="User Pic"/>
      <p>{name}</p>
    <select id='profile-select' onChange={(e)=>{
      const selectedOption=e.target.value;
      console.log(selectedOption)
      setOptionProfile(selectedOption);
    }}>
      <option value='/Menu'>Waiter</option>
      <option value='/ToPrepare'>Chef</option>
    </select>
    <Link to='/'>Logout</Link>
    <Link to={optionProfileState}>Yes I am</Link>

    </div>
  )
}

export default UserProfile;

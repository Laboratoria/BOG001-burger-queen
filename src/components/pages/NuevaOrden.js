
import React from 'react'
import Tab from '../Tab'
import db from '../../firebaseConfig.js'


export default function NuevaOrden() {
  return (
    <div>
      <Tab></Tab>
    </div>
  )
}

const getmenu = async () => {
  db.collection("Menu").get().then (querySnapshot => {

    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      console.log(docs)
    });

let lunch = Object.values( docs[2])
console.log(lunch)
    // setLinks(docs);
  });
};
getmenu()

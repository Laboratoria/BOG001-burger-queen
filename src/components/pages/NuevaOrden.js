
import React from 'react'
import Tab from '../Tab'
import db from '/Users/albalucia/Desktop/BURGER QUEEN/Burger-queen/src/firebaseConfig.js'


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
      // console.log(docs)
    });


//     let desayunos = Object.keys( docs[0])
//   console.log(desayunos)
//   let almuerzo = Object.keys( docs[1])
//   console.log(almuerzo)
// desayunos.forEach(item => {
//   console.log(docs[0][item])
// })

let lunch = Object.values( docs[2])
console.log(lunch)
    // setLinks(docs);
  });
};
getmenu()

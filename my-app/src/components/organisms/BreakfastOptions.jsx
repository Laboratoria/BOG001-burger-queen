import React from "react";
import { useForm } from 'react-hook-form';
import menu from '../data/menu.json';
import firebase from 'firebase/app';
import 'firebase/firestore';
// import Checkbox from '../molecules/Checkbox'

const BreakfastOptions = (props) => {

  const { register, handleSubmit } = useForm();

  const menuBreakfast = menu.menu[0].breakfast

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  const onSubmit = (data, e) => {
    console.log(data.item)
    let optBreakfastSelected = data.item;
    console.log(menuBreakfast);

    let optBreakfastData = menuBreakfast.filter(function(element){
      return element.option == optBreakfastSelected;
    })
    console.log(optBreakfastData);

    // props.addItem(data)
    // https://www.youtube.com/watch?v=tB8k-X-_yBE&ab_channel=SamLama
    // https://www.youtube.com/watch?v=Y9-UkL6ent4&ab_channel=FaztCode 35

    let item = optBreakfastData[0];
    console.log(item)
    //let item = optBreakfastData[0].item;

    // .add assign an unique id from doc, so... uuidv4 isn't necesary

    db.collection("br-order").add({
      order: item
    })


    // Shows ID of document created in firestore, then refresh input values

    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })

    // Shows error if data isn't created

    .catch(function(error) {
      console.log("Error adding document: ", error);
    });
  }

  //https://stackoverflow.com/questions/43513458/how-to-set-values-from-json-to-checkboxes
  //https://es.reactjs.org/docs/lists-and-keys.html

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Coffee</h2>
          <label>American Coffee </label>
          <input
          type="checkbox"
          name="item"
          ref={register}
          value='opt-br-1'
          />
          <label>White Coffee </label>
          <input
          type="checkbox"
          name="item"
          ref={register}
          value='opt-br-2'
          // checked={this.value}
          />
          <h2>Sandwich</h2>
          <label>Ham & cheese sandwich </label>
          <input
          type="checkbox"
          name="item"
          ref={register}
          value='opt-br-3'
          // checked={this.value}
          />
          <h2>Juice</h2>
          <label>Natural fruit juice </label>
          <input
          type="checkbox"
          name="item"
          ref={register}
          value='opt-br-4'
          //checked={this.value}
          />
          <h2>Preferences</h2>
          <input
          type="text"
          name='preferences'
          ref={register}
          />
        <button type='submit'><span>+</span> Add to Order</button>
      </form>
    </div>
  );
};

export default BreakfastOptions;

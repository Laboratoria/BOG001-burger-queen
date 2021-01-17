import React from "react";
import { useForm } from 'react-hook-form'
import menu from '../data/menu.json';
import firebase from 'firebase/app';
import 'firebase/firestore';

const LunchMealOptions = () => {

  const { register, handleSubmit } = useForm();

  const menuLunch = menu.menu[1].lunch

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  const onSubmit = (data, e) => {
    console.log(data.item)
    let optLunchSelected = data.item;
    console.log(menuLunch);

    let optLunchData = menuLunch.filter(function(element){
      return element.option == optLunchSelected;
    })
    console.log(optLunchData);

    // props.addItem(data)
    // https://www.youtube.com/watch?v=tB8k-X-_yBE&ab_channel=SamLama
    // https://www.youtube.com/watch?v=Y9-UkL6ent4&ab_channel=FaztCode 35

    let item = optLunchData[0];
    console.log(item)
    //let item = optLunchData[0].item;

    // .add assign an unique id from doc, so... uuidv4 isn't necesary

    db.collection("lch-order").add({
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Burgers</h2>
        <label>Simple Burger </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-1'
        // checked={this.value}
        />
        <label>Double Burger </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-2'
        // checked={this.value}
        />
        <h2>Food sides</h2>
        <label>French fries </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-3'
        // checked={this.value}
        />
        <label>Onion rings </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-4'
        // checked={this.value}
        />
        <h2>To drink</h2>
        <label>Water 500ml </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-5'
        //checked={this.value}
        />
        <label>Water 750ml </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-6'
        //checked={this.value}
        />
        <label>Soda 500ml </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-7'
        //checked={this.value}
        />
        <label>Soda 750ml </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-8'
        //checked={this.value}
        />
        <h2>Aditions</h2>
        <label>Cheese </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-9'
        //checked={this.value}
        />
        <label>Egg </label>
        <input
        type="checkbox"
        name="item"
        ref={register}
        value='opt-lch-10'
        //checked={this.value}
        />
        <h2>Preferences</h2>
        <input
        type="text"
        name='preferences'
        // ref={register}
        />
        <button type='submit'><span>+</span> Add to Order</button>
      </form>
    </div>
  );
};

export default LunchMealOptions;

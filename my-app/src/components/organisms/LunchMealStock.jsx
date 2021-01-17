import React from "react";
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/firestore';

const LunchMealStock = (props) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    // console.log(props.indexOf)
    //props.addItem(data)
    //https://www.youtube.com/watch?v=tB8k-X-_yBE&ab_channel=SamLama
  }

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  function addStock() {

    // Get data from inputs id

    let stocklunch1 = document.getElementById("stocklunch1").value;
    let stocklunch2 = document.getElementById("stocklunch2").value;
    let stocklunch3 = document.getElementById("stocklunch3").value;
    let stocklunch4 = document.getElementById("stocklunch4").value;
    let stocklunch5 = document.getElementById("stocklunch5").value;
    let stocklunch6 = document.getElementById("stocklunch6").value;
    let stocklunch7 = document.getElementById("stocklunch7").value;
    let stocklunch8 = document.getElementById("stocklunch8").value;
    let stocklunch9 = document.getElementById("stocklunch9").value;

    // .add assign an unique id from doc, so... uuidv4 isn't necesary

    db.collection("lunch-stock").add({
      MeatBurger:             stocklunch1,
      ChickenBurger:          stocklunch2,
      VeggieBurger:           stocklunch3,
      FrenchFries:            stocklunch4,
      OnionRings:             stocklunch5,
      Water500ml:             stocklunch6,
      Water750ml:             stocklunch7,
      Soda500ml:              stocklunch8,
      Soda750ml:              stocklunch9
    })

    // Shows ID of document created in firestore, then refresh input values

    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("stocklunch1").value = '';
      document.getElementById("stocklunch2").value = '';
      document.getElementById("stocklunch3").value = '';
      document.getElementById("stocklunch4").value = '';
      document.getElementById("stocklunch5").value = '';
      document.getElementById("stocklunch6").value = '';
      document.getElementById("stocklunch7").value = '';
      document.getElementById("stocklunch8").value = '';
      document.getElementById("stocklunch9").value = '';
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
        <label>Meat Burger </label>
        <input
        type="number"
        name="Meat Burger"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch1"
        // value='American Coffee'
        // checked={this.value}
        />
        <label>Chicken Burger </label>
        <input
        type="number"
        name="Chicken Burger"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch2"
        // value='White Coffee'
        // checked={this.value}
        />
        <label>Veggie Burger </label>
        <input
        type="number"
        name="Veggie Burger"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch3"
        // value='White Coffee'
        // checked={this.value}
        />
        <h2>Food sides</h2>
        <label>French fries </label>
        <input
        type="number"
        name="French fries"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch4"
        // value='French fries'
        // checked={this.value}
        />
        <label>Onion rings </label>
        <input
        type="number"
        name="Onion rings"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch5"
        // value='French fries'
        // checked={this.value}
        />
        <h2>To drink</h2>
        <label>Water 500ml </label>
        <input
        type="number"
        name="Water 500ml"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch6"
        //value='Water 500ml'
        //checked={this.value}
        />
        <label>Water 750ml </label>
        <input
        type="number"
        name="Water 500ml"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch7"
        //value='Water 750ml'
        //checked={this.value}
        />
        <label>Soda 500ml </label>
        <input
        type="number"
        name="Soda 500ml"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch8"
        //value='Soda 500ml'
        //checked={this.value}
        />
        <label>Soda 750ml </label>
        <input
        type="number"
        name="Soda 750ml"
        ref= {register({
          required: {value: true, message: 'Data required' }
        })}
        id="stocklunch9"
        //value='Soda 750ml'
        //checked={this.value}
        />
        <button type='submit'onClick={addStock}><span>+</span> Add to Order</button>
      </form>
    </div>
  );
};

export default LunchMealStock;

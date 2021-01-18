import React from "react";
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/firestore';

const BreakfastStock = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    // console.log(props.indexOf)
    //props.addItem(data)
    //Reset inputs
    //https://www.youtube.com/watch?v=tB8k-X-_yBE&ab_channel=SamLama
  }

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  function addStock() {

    // Get data from inputs id

    let stockbr1 = document.getElementById("stockbr1").value;
    let stockbr2 = document.getElementById("stockbr2").value;
    let stockbr3 = document.getElementById("stockbr3").value;
    let stockbr4 = document.getElementById("stockbr4").value;

    // .add assign an unique id from doc, so... uuidv4 isn't necesary

    db.collection("br-stock").add({
      "stock":
        {
          AmericanCoffee:         stockbr1,
          WhiteCoffee:            stockbr2,
          HamAndCheeseSandwich:   stockbr3,
          Juice:                  stockbr4
        }
    })

    // Shows ID of document created in firestore, then refresh input values

    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("stockbr1").value = '';
      document.getElementById("stockbr2").value = '';
      document.getElementById("stockbr3").value = '';
      document.getElementById("stockbr4").value = '';
    })

    // Shows error if data isn't created

    .catch(function(error) {
      console.log("Error adding document: ", error);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Coffee</h2>
          <label>American Coffee </label>
          <input
          type="number"
          name="AmericanCoffee"
          id="stockbr1"
          ref= {register({
            required: {value: true, message: 'Data required' }
          })}
          // value='American Coffee'
          // checked={this.value}
          />
          <div>
            {errors?.AmericanCoffee?.message}
          </div>
          <label>White Coffee </label>
          <input
          type="number"
          name="WhiteCoffee"
          id="stockbr2"
          ref= {register({
            required: {value: true, message: 'Data required' }
          })}
          // value='White Coffee'
          // checked={this.value}
          />
          <div>
            {errors?.WhiteCoffee?.message}
          </div>
          <h2>Sandwich</h2>
          <label>Ham & cheese sandwich </label>
          <input
          type="number"
          name="HamAndCheeseSandwich"
          id="stockbr3"
          ref= {register({
            required: {value: true, message: 'Data required' }
          })}
          // value='Ham and cheese sandwich'
          // checked={this.value}
          />
          <div>
            {errors?.HamAndCheeseSandwich?.message}
          </div>
          <h2>Juice</h2>
          <label>Natural fruit juice </label>
          <input
          type="number"
          name="Juice"
          id="stockbr4"
          ref= {register({
            required: {value: true, message: 'Data required' }
          })}
          //value='Natural fruit juice'
          //checked={this.value}
          />
          <div>
            {errors?.Juice?.message}
          </div>
        <button type='submit' onClick={addStock}><span>+</span> Add stock</button>
      </form>
    </div>
  );
};

export default BreakfastStock;

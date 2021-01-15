import React from "react";
import { useForm } from 'react-hook-form'

const BreakfastStock = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data)
    // console.log(props.indexOf)

    props.addItem(data)

    //Reset inputs
    e.target.reset();

    //https://www.youtube.com/watch?v=tB8k-X-_yBE&ab_channel=SamLama
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Coffee</h2>
          <label for="american-coffee">American Coffee </label>
          <input
          type="number"
          name="AmericanCoffee"
          ref= {register({
            required: {value: true, message: 'Data required' }
          })}
          // value='American Coffee'
          // checked={this.value}
          />
          <div>
            {errors?.AmericanCoffee?.message}
          </div>
          <label for="white-coffee">White Coffee </label>
          <input
          type="number"
          name="WhiteCoffee"
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
          <label for="ham-cheese">Ham & cheese sandwich </label>
          <input
          type="number"
          name="HamAndCheeseSandwich"
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
          <label for="juice">Natural fruit juice </label>
          <input
          type="number"
          name="Juice"
          ref= {register({
            required: {value: true, message: 'Data required' }
          })}
          //value='Natural fruit juice'
          //checked={this.value}
          />
          <div>
            {errors?.Juice?.message}
          </div>
        <button type='submit'><span>+</span> Add to Order</button>
      </form>
    </div>
  );
};

export default BreakfastStock;

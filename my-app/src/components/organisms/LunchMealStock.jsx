import React from "react";
import { useForm } from 'react-hook-form'

const LunchMealStock = (props) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data)
    // console.log(props.indexOf)
    //props.addItem(data)

    //https://www.youtube.com/watch?v=tB8k-X-_yBE&ab_channel=SamLama
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Burgers</h2>
        <label for="simple-burger">Simple Burger </label>
        <input
        type="number"
        name="Simple Burger"
        ref={register}
        // value='American Coffee'
        // checked={this.value}
        />
        <label for="double-burger">Double Burger </label>
        <input
        type="number"
        name="Double Burger"
        ref={register}
        // value='White Coffee'
        // checked={this.value}
        />
        <h2>Food sides</h2>
        <label for="french-fries">French fries </label>
        <input
        type="number"
        name="French fries"
        ref={register}
        // value='French fries'
        // checked={this.value}
        />
        <label for="onion-rings">Onion rings </label>
        <input
        type="number"
        name="Onion rings"
        ref={register}
        // value='French fries'
        // checked={this.value}
        />
        <h2>To drink</h2>
        <label for="water-500ml">Water 500ml </label>
        <input
        type="number"
        name="Water 500ml"
        ref={register}
        //value='Water 500ml'
        //checked={this.value}
        />
        <label for="water-750ml">Water 750ml </label>
        <input
        type="number"
        name="Water 500ml"
        ref={register}
        //value='Water 750ml'
        //checked={this.value}
        />
        <label for="soda-500ml">Soda 500ml </label>
        <input
        type="number"
        name="Soda 500ml"
        ref={register}
        //value='Soda 500ml'
        //checked={this.value}
        />
        <label for="soda-750ml">Soda 750ml </label>
        <input
        type="number"
        name="Soda 750ml"
        ref={register}
        //value='Soda 750ml'
        //checked={this.value}
        />
        <button type='submit'><span>+</span> Add to Order</button>
      </form>
    </div>
  );
};

export default LunchMealStock;

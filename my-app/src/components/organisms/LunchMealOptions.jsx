import React from "react";

const LunchMealOptions = () => {
  return (
    <div>
      <form>
        <h2>Burgers</h2>
        <label for="simple-burger">Simple Burger </label>
        <input
        type="checkbox"
        name="Simple Burger"
        // ref={register}
        // value='American Coffee'
        // checked={this.value}
        />
        <label for="double-burger">Double Burger </label>
        <input
        type="checkbox"
        name="Double Burger"
        // ref={register}
        // value='White Coffee'
        // checked={this.value}
        />
        <h2>Food sides</h2>
        <label for="french-fries">French fries </label>
        <input
        type="checkbox"
        name="French fries"
        // ref={register}
        // value='French fries'
        // checked={this.value}
        />
        <label for="onion-rings">Onion rings </label>
        <input
        type="checkbox"
        name="Onion rings"
        // ref={register}
        // value='French fries'
        // checked={this.value}
        />
        <h2>To drink</h2>
        <label for="water-500ml">Water 500ml </label>
        <input
        type="checkbox"
        name="Water 500ml"
        // ref={register}
        //value='Water 500ml'
        //checked={this.value}
        />
        <label for="water-750ml">Water 750ml </label>
        <input
        type="checkbox"
        name="Water 500ml"
        // ref={register}
        //value='Water 750ml'
        //checked={this.value}
        />
        <label for="soda-500ml">Soda 500ml </label>
        <input
        type="checkbox"
        name="Soda 500ml"
        // ref={register}
        //value='Soda 500ml'
        //checked={this.value}
        />
        <label for="soda-750ml">Soda 750ml </label>
        <input
        type="checkbox"
        name="Soda 750ml"
        // ref={register}
        //value='Soda 750ml'
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

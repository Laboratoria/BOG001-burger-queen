import React from 'react';
import '../css/Home.css';
import background from '../../src/img/background.jpg'

const Home = () => {
  return (
    <div className="Home">
      <div className="Background">
      <img src={background} alt="hello"  />
      </div>
      </div>
   
  );
}

export default Home;
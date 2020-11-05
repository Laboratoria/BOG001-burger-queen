import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import { H, P2 } from '../Styling';
import './Home.scss';
import logo from '../../assets/Logo.png';
import chef from '../../assets/chef.svg';
import waiter from '../../assets/waiter.svg';

export default function Home() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleEmployee = (e) => {
    setName(e.currentTarget.value);
  };

  const handleClickHome = () => {
    if (name !== '') {
      localStorage.setItem('employ', name);
    } else {
      setError(<P2 error> Escribe tu nombre</P2>);
    }
  };

  return (
    <div id="home">
      <section className="home-section">
        <img src={logo} srcSet={`${logo} 300w`} alt="Logo" />
        <H>&quot;Fresco y auténtico&quot;</H>
      </section>
      <section className="home-section">
        <div>
          <h1 className="letra">¡Bienvenido!</h1>
          <label htmlFor="name-employee">
            <H>Ingresa tú nombre</H>
            <input
              type="text"
              className="name-employee"
              onChange={(e) => handleEmployee(e)}
              placeholder="Escribe tú nombre"
            />
            {error}
          </label>
          <H>Escoge tú rol</H>
          <Link to={name !== '' ? '/pedidos' : '/'}>
            <Button
              cName="btn-home"
              img={<img className="icon-home" src={chef} alt="chef" />}
              text="CHEF"
              onClick={handleClickHome}
            />
          </Link>
          <Link to={name !== '' ? '/nueva-orden' : '/'}>
            <Button
              cName="btn-home"
              img={<img className="icon-home" src={waiter} alt="waiter" />}
              text="MESERO"
              onClick={handleClickHome}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

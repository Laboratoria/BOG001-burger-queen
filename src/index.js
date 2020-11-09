
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import PrincipalCocina from './pages/principalCocina';
import OpcionesMenu from './pages/opcionesMenu';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import Header from './componentes/header.js';
//import PrincipalMesero from './pages/principalMesero';
//import HeaderCocina from './componentes/HeaderCocina';

const container = document.getElementById('root');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<OpcionesMenu />,container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


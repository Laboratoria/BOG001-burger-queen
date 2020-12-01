import hamburguesa from './images/HamburguesaL.jpg'
import papitas from './images/papitas.jpg';
import agua from './images/jugo.jpg';
import gaseosa from './images/Gaseosa.jpg';
import cafe from './images/CafeTaza.jpg';
const itemsMenu = {  data: { 
      "Hamburguesa Simple": {
        "id": 1,
        "name": "Hamburguesa Simple",
        "price": 10,
        "img": hamburguesa,
        "type": ["Principal"],
      },
      "Hamburguesa Doble": {
        "id": 2,
        "name": "Hamburguesa Doble",
        "price": 15,
        "img": hamburguesa,
        "type": ["Principal"],
      },
      "Papas Fritas": {
        "id": 3,
        "name": "Papas Fritas",
        "price": 5,
        "img": papitas,
        "type": ["Acompañamientos"]
      },
      "Aros de cebolla": {
        "id": 4,
        "name": 'Aros de cebolla',
        "price": 5,
        "img": papitas,
        "type": ["Acompañamientos"]
      },
      "Agua 500 ml": {
        "id": 5,
        "name": "Agua 500ml",
        "price": 5,
        "img": agua,
        "type": ["Bebidas"]
      },
      "Agua 750 ml": {
        "id": 6,
        "name": "Agua 750ml",
        "price": 7,
        "img": agua,
        "type": ["Bebidas"]
      },
      "Gaseosa 500ml": {
        "id": 7,
        "name": "Gaseosa 500ml",
        "price": 7,
        "img": gaseosa,
        "type": ["Bebidas"]
      },
      "Gaseosa 750 ml": {
        "id": 8,
        "name": "Gaseosa 750ml",
        "price": 7,
        "img": gaseosa,
        "type": ["Bebidas"]
      },
      "Café Americano": {
        "id": 9,
        "name": "Café Americano",
        "price": 5,
        "img": cafe,
        "type": ["DesayunoBebidas"]
      },
      "Café con Leche": {
        "id": 10,
        "name": "Café con leche",
        "price": 5,
        "img": cafe,
        "type": ["DesayunoBebidas"]
      },
      "Sandwich de jamón y queso": {
        "id": 11,
        "name": "Sandwich de jamón y queso",
        "price": 5,
        "img": hamburguesa,
        "type": ["Desayuno"]
      },
      "Jugo de frutas natural": {
        "id": 12,
        "name": "Jugo de frutas natural",
        "price": 5,
        "img": agua,
        "type": ["DesayunoBebidas"]
      },
      "Queso": {
        "id": 13,
        "name": "Queso",
        "price": 1,
        "img": "/images/agua_500ml.jpg",
        "type": ["Adición"]
      },
      "Huevo": {
        "id": 14,
        "name": "Huevo",
        "price": 1,
        "img": "/images/agua_500ml.jpg",
        "type": ["Adición"]
      },
      "Tocino": {
        "id": 21,
        "name": "Tocino",
        "price": 3,
        "img": "/images/agua_500ml.jpg",
        "type": ["Adición"]
      },
      "Tomate": {
        "id": 15,
        "name": "Tomate",
        "price": 0,
        "img": "/images/agua_500ml.jpg",
        "type": ["Salsas"]
      },
      "Mayonesa": {
        "id": 16,
        "name": "Mayonesa",
        "price": 0,
        "img": "/images/agua_500ml.jpg",
        "type": ["Salsas"]
      },
      "Mostaza": {
        "id": 17,
        "name": "Mostaza",
        "price": 0,
        "img": "/images/agua_500ml.jpg",
        "type": ["Salsas"]
      },
      "Res": {
        "id": 18,
        "name": "Res",
        "price": 0,
        "img": "/images/agua_500ml.jpg",
        "type": ["Tipo"]
      },
      "Pollo": {
        "id": 19,
        "name": "Pollo",
        "price": 0,
        "img": "/images/agua_500ml.jpg",
        "type": ["Tipo"]
      },
      "Vegetariana": {
        "id": 20,
        "name": "Vegetariana",
        "price": 0,
        "img": "/images/agua_500ml.jpg",
        "type": ["Tipo"]
      }
    }
} 
  
export default  itemsMenu
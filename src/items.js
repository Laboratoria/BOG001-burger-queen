import hamburguesa from './images/HamburguesaL.jpg'
import papitas from './images/papitas.jpg';
import agua from './images/jugo.jpg';
import gaseosa from './images/Gaseosa.jpg';
const itemsMenu = {  data: { 
      "Hamburguesa Simple": {
        "id": "001",
        "name": "Hamburguesa Simple",
        "price": 10,
        "img": hamburguesa,
        "type": ["Principal"],
        "class": ["res", "pollo", "vegetariana"]
      },
      "Hamburguesa Doble": {
        "id": "002",
        "name": "Hamburguesa Doble",
        "price": 15,
        "img": hamburguesa,
        "type": ["Principal"],
        "class": ["res", "pollo", "vegetariana"]
      },
      "Papas Fritas": {
        "id": "003",
        "name": "Papas Fritas",
        "price": 5,
        "img": papitas,
        "type": ["Acompañamientos"]
      },
      "Aros de cebolla": {
        "id": "004",
        "name": 'Aros de cebolla',
        "price": 5,
        "img": papitas,
        "type": ["Acompañamientos"]
      },
      "Agua 500 ml": {
        "id": "005",
        "name": "Agua 500ml",
        "price": 5,
        "img": agua,
        "type": ["Bebidas"]
      },
      "Agua 750 ml": {
        "id": "006",
        "name": "Agua 750ml",
        "price": 7,
        "img": agua,
        "type": ["Bebidas"]
      },
      "Gaseosa 500ml": {
        "id": "007",
        "name": "Gaseosa 500ml",
        "price": 7,
        "img": gaseosa,
        "type": ["Bebidas"]
      },
      "Gaseosa 750 ml": {
        "id": "008",
        "name": "Gaseosa 750ml",
        "price": 7,
        "img": gaseosa,
        "type": ["Bebidas"]
      },
      "Café Americano": {
        "id": "009",
        "name": "Café Americano",
        "price": 5,
        "img": "/images/cafe_americano.jpg",
        "type": ["Desayuno"]
      },
      "Café con Leche": {
        "id": "010",
        "name": "Café con leche",
        "price": 5,
        "img": "/images/cafe_con_leche.jpg",
        "type": ["Desayuno"]
      },
      "Sandwich de jamón y queso": {
        "id": "011",
        "name": "Sandwich de jamón y queso",
        "price": 5,
        "img": "/images/sandwich_de_jamon_y_queso.png",
        "type": ["Desayuno"]
      },
      "Jugo de frutas natural": {
        "id": "012",
        "name": "Jugo de frutas natural",
        "price": 5,
        "img": "/images/jugo_de_frutas_natural.jpg",
        "type": ["Desayuno"]
      },
      "Queso": {
        "id": "013",
        "name": "Queso",
        "price": 1,
        "img": "/images/agua_500ml.jpg",
        "type": ["Adición"]
      },
      "Huevo": {
        "id": "014",
        "name": "Huevo",
        "price": 1,
        "img": "/images/agua_500ml.jpg",
        "type": ["Adición"]
      }
    }
} 
  
export default  itemsMenu
// USAR EN EL FUTURO
//auth.onAuthStateChanged((user) => {
//if (user) { window.location.hash = '#/home'; }
//})

const db = firebase.firestore();

//export const obtenerObjetos = id => db.collection('objetos').doc(id).get().then (snapshot);
export const obtenerObjetos = async () => {
  return db.collection('objetos')
    .get()
}


export const cargarPaginaMostrar = async () => {
  const querySnapshot = await obtenerObjetos();
  let view = '';
  querySnapshot.forEach ( doc => { 
        const infoCadaObjeto = doc.data()
        infoCadaObjeto.id = doc.id; 
        view += ` <button  class='fichaObjeto' id= "${infoCadaObjeto.id}">
                <div><img class='imgFichaObjeto' src=./Imagenes/pruebaImagen.jpg></div>
                <div class ='infoFichaObjeto'>
                <p class='nombreFichaObjeto'> ${infoCadaObjeto.nombreNuevoItem} </p> 
                <img class='botonObjeto' src=./Imagenes/corazonRojo.svg>
                <img class='botonObjeto' src=./Imagenes/comentario.svg>
                <p class='textoFichaObjeto'> ${infoCadaObjeto.descripcionNuevoItem} </p>
                </div>
                </button>`
        
      })
      return view
      }


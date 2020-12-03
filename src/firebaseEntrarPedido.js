export const entrarItem = async () => {
    let id = localStorage.getItem('itemId')
    
      const docRef = db.collection("objetos").doc(id);
    
      return docRef.get().then(function(doc) {
    
        if (doc.exists) {
            console.log("Document data:", doc.data());
    
            const infoCadaObjeto = doc.data();
    
            let viewItem = `<section class = 'objeto' id= '${id}' >
                <div class='botones'>
                <img src="./Imagenes/pruebaImagen.jpg" class='imagenObjeto'>
                </div>
                <p class='itemNameI'> ${infoCadaObjeto.nombreNuevoItem} </p>
                <img class='like' src=./Imagenes/corazonRojo.svg></div>
                <p class='itemDescriptionI'> ${infoCadaObjeto.descripcionNuevoItem}   </p>
                </section>`
                //ya esta la vista hay que pintarla 
                return viewItem
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
      let viewItem = ` <p> Error! objeto no encontrado </p> `
    return viewItem
    });
    }

export const guardarObjetosfs = ( nombreNuevoObjeto , descripcionNuevoObjeto ) => 
db.collection('objetos').doc().set(
    {
        nombreNuevoObjeto ,
        descripcionNuevoObjeto
    }
);
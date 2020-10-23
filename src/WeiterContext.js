import React, {useState} from 'react'

const WeiterContext = React.createContext();
let { Provider, Consumer} = WeiterContext;

export default function WeiterProvider({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const clickToOpen = () => setIsOpen(!isOpen);

    const [bill, setBill] = useState([]);
    const addProduct = (values) => setBill([...bill, values]);

    const deleteProduct = (id) =>{
     let filtered = bill.filter(function(el) { return el.id !==  id})
     setBill(filtered)
    }

    return (
        <Provider value={{isOpen, clickToOpen, bill, addProduct, deleteProduct}}>
            {children}
        </Provider>
    )
}

export {WeiterProvider, WeiterContext, Consumer}

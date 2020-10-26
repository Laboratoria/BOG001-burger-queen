import React, {useState} from 'react'

const WeiterContext = React.createContext();
let { Provider, Consumer} = WeiterContext;

export default function WeiterProvider({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [burger, stateBurger] = useState({})
    const clickToOpen = (name, price) => {  stateBurger({name:name, price:price}) ; setIsOpen(true)};
    const clickToClose = () => setIsOpen(false);

    const [bill, setBill] = useState([]);
    const addProduct = (values) => setBill([...bill, values]);

    const deleteProduct = (id) => {
     let filtered = bill.filter(function(el) { return el.id !==  id})
     setBill(filtered)
    }



    return (
        <Provider value={{isOpen, clickToOpen,clickToClose, bill, setBill, addProduct, deleteProduct, burger, stateBurger}}>
            {children}
        </Provider>
    )
}

export {WeiterProvider, WeiterContext, Consumer}

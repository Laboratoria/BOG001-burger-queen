import '../css/main.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';


/*Components*/
import Home from '../views/Home';
import notFound from "../components/notFound";



const Router = () => {
    return (
<Switch>
    <Route exact path='/' component={Home}/>
    

    <Route component={notFound} />

</Switch>
    )

}

export default Router;
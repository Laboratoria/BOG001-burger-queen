import React, {useContext} from "react";
import {Route, Redirect} from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { user } = useContext(AuthContext);
    return user
        ? (
            <Route
                {...rest}
                render={(props)=> (
                    <Component {...props}/>
                )}
            />
        )
        : (
            <Redirect to="/Login" />
        )
};

export default PrivateRoute

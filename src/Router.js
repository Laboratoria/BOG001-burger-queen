import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
    
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" />
                </Switch>
            </BrowserRouter>
        )
    
}
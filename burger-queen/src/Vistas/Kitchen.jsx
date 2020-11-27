import React, {Fragment, useEffect, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';



const BackgroundKitchen = () => {
    return ( 
    <Fragment>
<div className="backgroundKitchen">
        <Navigation/>
        <Footer/>
    </div>
    </Fragment>
    );
}

export default BackgroundKitchen;
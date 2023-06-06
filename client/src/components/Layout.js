import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';

const Layout = () => {
    return (
        <main>
            <Header />
            <hr />
            <Outlet/>
        </main>
    )
}

export default Layout
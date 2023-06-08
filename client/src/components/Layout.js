import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';

const Layout = () => {
    return (
        <main>
            <Header />
            <hr />
            <hr style={{marginBottom: "2rem"}}/>
            <Outlet/>
        </main>
    )
}

export default Layout
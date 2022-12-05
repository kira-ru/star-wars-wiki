import React from 'react';
import Header from "../Header/Header";
import {Outlet, useParams} from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {

    return (
        <>
            <Header/>

            <div className='main'>
                <Outlet/>
            </div>

            <Footer/>
        </>
    );
};

export default Layout;
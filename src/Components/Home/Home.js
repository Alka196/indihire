import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import MainPage from './MainPage';



function Home() {
    const location = useLocation();
    const isMainPage = location.pathname === "/";
    return (
        <>
            <Header />   
            {isMainPage && <MainPage />}      
            <Footer />
            <Outlet />
           

        </>
    );
}

export default Home;
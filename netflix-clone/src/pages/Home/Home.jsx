import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home= ()=>{

    return (
        <>
            <Header/>
            {/* <Outlet/> */}
            <Banner/>
            <Footer/>

        </>
    )
}

export default Home;
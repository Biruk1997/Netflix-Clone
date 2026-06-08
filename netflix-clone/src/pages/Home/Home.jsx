import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList"

const Home= ()=>{

    return (
        <>
            <Header/>
            {/* <Outlet/> */}
            <Banner/>
            <RowList/>
            <Footer/>

        </>
    )
}

export default Home;
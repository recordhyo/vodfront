import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Redirection from "../Redirection";
import Home from "../Home"
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

function AppRouter(){
    return(
        <BrowserRouter>
            <Header/>
            <div style={style}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path='/accounts/kakao/login/callback/' element={<Redirection />} />
                </Routes>
                </div>
            <Footer/>
        </BrowserRouter>

    );
}

const style ={
    padding: '30px',
    width: '100%',
    minHeight:'70vh'

}

export default AppRouter;
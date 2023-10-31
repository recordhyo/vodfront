import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Redirection from "../Redirection";
import Home from "../Home"
import Header from "../Components/Layout/Header";
function AppRouter(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path='/accounts/kakao/login/callback/' element={<Redirection />} />
            </Routes>
        </BrowserRouter>

    );
}

const style ={
    padding: '30px',
    width: '100%',
    minHeight:'100vh'

}

export default AppRouter;
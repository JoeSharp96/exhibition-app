import Expo from "./exhibition/Expo";
import Login from "./exhibitors/login/Login";
import Booth from "./exhibitors/profile/Booth";
import Home from "./home/Home";
import { Routes, Route, Navigate } from 'react-router-dom';

function Content() {
    const loggedInObj = JSON.parse(localStorage.getItem("isLoggedIn"));
    let loggedIn;
    if (loggedInObj) {
        loggedIn = loggedInObj.value;
    }
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/exhibition" element={<Expo />} />
            <Route exact path="/login" element={ !loggedIn ? (<Login />) : (<Navigate replace to={"/booth"} />)} />
            <Route exact path="/booth" element={<Booth />} />
        </Routes>
    );
};

export default Content;
import Expo from "./exhibition/Expo";
import Ezone from "./exhibitors/Ezone";
import Home from "./home/Home";
import { Routes, Route } from 'react-router-dom';

function Content() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/exhibition" element={<Expo />} />
            <Route exact path="/exhibitor-center" element={<Ezone />} />
        </Routes>
    );
};

export default Content;
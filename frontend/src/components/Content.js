import Expo from "./exhibition/Expo";
import Ezone from "./exhibitors/Ezone";
import { Routes, Route } from 'react-router-dom'

function Content() {
    return (
        <Routes>
            <Route exact path="/" element={<Expo />} />
            <Route exact path="/exhibitor-center" element={<Ezone />} />
        </Routes>
    );
};

export default Content;
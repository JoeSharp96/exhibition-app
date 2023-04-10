import ExpoList from "./ExpoList";
import { Container } from "react-bootstrap";
import { useState } from 'react';

// Exhibitor list called on page load, passed as props to the ExpoList component.
function Expo() {
    const [exhibitors, setExhibitors] = useState([]);
    const [loadExhibitors, loadToggle] = useState(true);

    const getExhibitors = async () => {
        const response = await fetch('/exhibition-booths', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        loadToggle(false);
        setExhibitors(data);
    }

    if (loadExhibitors) {
        getExhibitors()
    }

    return (
        <Container>
            <section className="heading">
                <h1 className="title">Virtual Exhibition</h1>
            </section>
            <ExpoList exhibitors={exhibitors} />
        </Container>
    ); 
};

export default Expo;
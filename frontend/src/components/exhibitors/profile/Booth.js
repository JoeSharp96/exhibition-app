import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import BoothForm from "./BoothForm";

function Booth() {
    
    const [boothContent, setBoothContent] = useState({
        boothTitle: '',
        boothNumber: 0,
        biography: '',
        logoUrl: '',
        contactInfo: {
            contactName: '',
            contactEmail: ''
        },
        website: '',
        article: {
            articleTitle: '',
            articleUrl: ''
        }
    })
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getContent();
    }, [])

    // Logout (I'm going to be using something like this a lot, maybe move this into a shared js function file?)
    const logOut = async () => {
        await fetch('/login/logout', {
            method: "GET",
            headers: { "Content-Type": "application/json"}
        })
        localStorage.removeItem('isLoggedIn');
        window.location.replace('/login');
    }

    // Get exhibitor form content
    const getContent = async () => {
        const response = await fetch('/exhibition-booths/edit', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        const data = await response.json();
        if (response.status === 403) {
            logOut();
        } else {
            setBoothContent(data);
            setLoading(false);
        }
    };

    if (isLoading) {
        <Container>
            <h1>Loading...</h1>
        </Container>
    } else {
        return (
            <Container>
                <BoothForm formContent={boothContent} />
            </Container>
        );
    };
};

export default Booth;
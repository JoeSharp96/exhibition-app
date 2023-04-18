import { useState } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

function LogoMarquee() {
    const [logos, setLogos] = useState();
    const [loadLogos, loadToggle] = useState(true);

    const getLogos = async () => {
        const response = await fetch('/exhibition-booths/logos', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        const logoList = data.map((logo, index) => {
            return(
                <img key={index} src={logo.logoUrl} height={100} alt={logo.boothTitle} />
            );
        });
        loadToggle(false);
        setLogos(logoList);
    };

    if (loadLogos) {
        getLogos()
    }


    return(
        <Container>
            <Marquee className="logo-marquee my-3" gradientColor={[248,249,250]}>
                {logos}
            </Marquee>
        </Container>
    );
};

export default LogoMarquee;
import { Row, Col, Container, Carousel } from "react-bootstrap";

function Slider() {
    return(
        <Container style={{backgroundImage: "url(/background.png", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", backgroundSize: "contain"}}>
            <Carousel className="feature-carousel pb-4" controls={false} fade={true}>
                <Carousel.Item>
                    <img src="/slider-image-1.jpg" />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Create your own account</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/slider-image-2.jpg" />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Create your own account</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/slider-image-3.jpg" />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Create your own account</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;
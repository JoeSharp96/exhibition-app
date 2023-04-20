import { Row, Col } from "react-bootstrap";

function Hero() {

    return (
        <div>
            <div className="hero-logo">
                <img className="mb-4"  src="/Exhibitr-logos_transparent_v2.png" width="250"/>
            </div>
            <h3 className="subtitle mb-3">Join the virtual exhibition</h3>
            <Row className="d-flex cta-btn">
                <Col className="button d-flex">
                    <a className="hero-button primary-btn mx-1"href="/exhibition">View Exhibitors</a>
                </Col>
                <Col className="button d-flex">
                    <a className="hero-button secondary-btn mx-1" href="/login">Login</a>
                </Col>
            </Row>
        </div>
    )
}

export default Hero;
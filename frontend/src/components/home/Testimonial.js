import { Col, Container, Row } from "react-bootstrap";

function Testimonial() {
    return(
        <Container>
            <Row>
                <Col lg={6} className="testimonial-list">
                    <h2 className="mb-4">Forget the frustration: easily manage your entire event, from start to finish</h2>
                    <ul>
                        <li>Manage and collect data for all of your in-person, hybrid, or virtual events in one place</li>
                        <li>Simple user interface makes it easy for attendees and exhibitors to be fully engaged with your event</li>
                        <li>Easy-to-use mobile app provides wayfinding, matchmaking, and personalized event scheduling</li>
                    </ul>
                    <div className="button d-flex">
                        <a className="content-button tertiary-btn mx-1"href="/exhibition">View Exhibitors</a>
                    </div>
                </Col>
                <Col lg={6} className="testimonial d-flex">
                    <div className="testimonial-content">
                        <div className="p-4">
                            <p className="pull-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus ante, ultricies id interdum et, dapibus in quam. Vestibulum finibus urna tortor, at rutrum libero."</p>
                            <p className="quote-source">John Smith, Job Title, Company Name</p>
                        </div>
                    </div>
                    <img className="testimonial-img" src="/slider-image-1.jpg" />   
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonial;
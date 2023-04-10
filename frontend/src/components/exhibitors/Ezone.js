import { Container, Row } from "react-bootstrap";
import LoginModule from "./LoginModule";

function Ezone() {
    return (
        <Container>
            <section className="heading">
                <h1 className="title">Ezone</h1>
            </section>
            <Row>
                <LoginModule />
            </Row>
        </Container>
    );
};

export default Ezone;
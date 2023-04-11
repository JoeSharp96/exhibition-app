import ModalContent from "../ModalContent";
import { Card, Button, Col, Row, Modal, Form} from "react-bootstrap";
import { useState } from "react";

function ExpoList(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    // Exhibitor object set when Find out more button is clicked. Passes information as props.
    const [exhibitor, setExhibitor] = useState();
    const getNum = (event) => {
        event.preventDefault();
        let i;
        console.log(event.target)
        const classNames = event.target.classList;
        for (let x = 0; x < event.target.classList.length; x++) {
            if (classNames[x] === "exhibitor-logo") {
                i = event.target.parentElement.id;
                break;
            } else {
                i = event.target.parentElement.parentElement.id;
            }
        }
        setExhibitor(props.exhibitors[i])
        handleOpen();
    }

    // Sort list by boothNumber or boothTitle
    const [sort, setOrder] = useState('alphabetical');
    console.log(sort);
    let exhibitors = props.exhibitors;
    console.log(exhibitors);
    if (sort === 'alphabetical') {
        exhibitors.sort((a, b) => {
            let titleOne = a.boothTitle.toLowerCase();
            let titleTwo = b.boothTitle.toLowerCase();

            if (titleOne < titleTwo) {
                return -1;
            } else if (titleOne > titleTwo) {
                return 1;
            } else {
                return 0;
            };
        });

    } else if (sort === 'numerical') {
        exhibitors.sort((a, b) => {
            let numOne = a.boothNumber;
            let numTwo = b.boothNumber;

            if (numOne < numTwo) {
                return -1;
            } else if (numOne > numTwo) {
                return 1;
            } else {
                return 0;
            };
        });
    };

    // Exhibitor list array.
    const exhibitorList = exhibitors.map((exhibitor, index) => {
        return (
            <Col lg={3} key={exhibitor.boothNumber} className="mb-3">
                <Card id={index}>
                    <div className="exhibitor-logo d-flex" onClick={getNum}>
                        <Card.Img className="px-1" variant="top" src={exhibitor.logoUrl} alt="Logo"/>
                    </div>
                    <Card.Body>
                        <Card.Title>{exhibitor.boothTitle}</Card.Title>
                        <Card.Text>Booth: {exhibitor.boothNumber}</Card.Text>
                        <Button className="view-booth" variant="primary" onClick={getNum}>View Booth</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
            <section>
                <Form.Select value={sort} onChange={(e) => setOrder(e.target.value)} aria-label="Sort by..." size="sm" className="mb-3">
                    <option value="alphabetical">Name</option>
                    <option value="numerical">Booth number</option>
                </Form.Select>
                <Row>
                    {exhibitorList}
                </Row>
                <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <ModalContent exhibitor={exhibitor} />
                </Modal>
            </section>
    );
};

export default ExpoList;
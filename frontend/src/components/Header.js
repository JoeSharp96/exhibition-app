import { useState } from 'react';
import { Nav, Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Header() {
    // Location object used to set active page in nav
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let location = useLocation();

    const loggedInObj = JSON.parse(localStorage.getItem("isLoggedIn"));
    let loggedIn;
    if (loggedInObj) {
        loggedIn = loggedInObj.value;
    }

    const logOut = async () => {
        await fetch('/login/logout', {
            method: "GET",
            headers: { "Content-Type": "application/json"}
        })
        localStorage.removeItem('isLoggedIn');
        window.location.replace("/")
        console.log("Hello")
    }

    if (loggedIn){
        return (
            <Navbar bg='light' variant='light' fixed='top'>
                <Container>
                    <Navbar.Brand href='/' className='me-5'>
                        <img alt="" src='/Exhibitr-logos_black_blue_transparent_v2.png' width="100" />
                    </Navbar.Brand>
                    <Nav className='me-auto' activeKey={location.pathname}>
                        <Nav.Link href='/exhibition'>Virtual Exhibition</Nav.Link>
                        <Nav.Link href='/login'>Exhibitor Center</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Button onClick={logOut} variant='primary'>Log out</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        );
    } else {
        return (
            <>
            <Navbar bg='light' variant='light' fixed='top' className='.d-md-none .d-lg-block'>
                <Container>
                    <Navbar.Brand href='/' className='me-5'>
                        <img alt="" src='/Exhibitr-logos_black_blue_transparent_v2.png' width="100" />
                    </Navbar.Brand>
                    <Nav className='me-auto' activeKey={location.pathname}>
                        <Nav.Link href='/exhibition'>Virtual Exhibition</Nav.Link>
                        <Nav.Link href='/login'>Exhibitor Center</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg='light' variant='light' fixed='top' className='d-md-none'>
                <Container>
                    <Navbar.Brand href='/' className='me-5'>
                        <img alt="" src='/Exhibitr-logos_black_blue_transparent_v2.png' width="100" />
                    </Navbar.Brand>
                    <Button variant='primary' onClick={handleShow}>Menu</Button>
                        <Offcanvas show={show} onHide={handleClose} responsive='md'>
                            <Offcanvas.Header closeButton />
                            <Offcanvas.Body>
                                <Nav className='me-auto' activeKey={location.pathname}>
                                    <Nav.Link href='/exhibition'>Virtual Exhibition</Nav.Link>
                                    <Nav.Link href='/login'>Exhibitor Center</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                </Container>
            </Navbar>
        </>
        )
    }
};

export default Header;
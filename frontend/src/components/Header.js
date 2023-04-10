import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';

function Header() {
    // Location object used to set active page in nav
    let location = useLocation();

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>Virtual Expo App</Navbar.Brand>
                <Nav className='me-auto' activeKey={location.pathname}>
                    <Nav.Link href='/'>Virtual Exhibition</Nav.Link>
                    <Nav.Link href='/exhibitor-center'>Exhibitor Center</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import logo from '../../images/LOGO.png';
import AuthModal from "./AuthModal";
import { useState } from "react";

const NavScrollExample = () => {
    //Modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Navbar bg="dark" expand="md">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <div>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-5     me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className='text-light fw-semibold me-4' href="#action1">Home</Nav.Link>
                            <Nav.Link className='text-light fw-semibold me-4' href="#action2">TV Shows</Nav.Link>
                            <Nav.Link className='text-light fw-semibold' href="#action2">Movies</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='me-5 d-flex'>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-5     me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Button className='bg-light text-danger fw-semibold me-1 px-4' variant='light' onClick={handleShow}>Register</Button>
                            <AuthModal show={show} handleClose={handleClose} />
                            <Button className='bg-danger text-light fw-semibold ms-1 px-4' variant='danger' onClick={handleShow}>Log In</Button>
                            <AuthModal show={show} handleClose={handleClose} />
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>

    );
}

export default NavScrollExample;
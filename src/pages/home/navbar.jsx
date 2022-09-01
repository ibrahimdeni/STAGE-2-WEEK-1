import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/LOGO.png';
import Button from 'react-bootstrap/Button';


function NavScrollExample() {
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
                            <Button className='bg-light text-danger fw-semibold me-1 px-4' variant='light'>Register</Button>
                            <Button className='bg-danger text-light fw-semibold ms-1 px-4' variant='danger'>Log In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
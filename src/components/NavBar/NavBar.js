import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="primary" className="navbar-dark">
            <Container>
                <Navbar.Brand href="/">WaiterApp</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
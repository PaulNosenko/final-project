import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from './NavBar.module.scss';

const NavBar = () => {
    return (
        <Navbar bg="primary" className="navbar-dark">
            <Container>
                <Navbar.Brand href="/">WaiterApp</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavLink to="/" className={style.link}>Home</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
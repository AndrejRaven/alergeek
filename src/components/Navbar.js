import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ravens Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/favourite" className="nav-link">Favourite</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
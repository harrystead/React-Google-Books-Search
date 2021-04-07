import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavbarToggle = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Google Books</Navbar.Brand>
      <Navbar />
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Search
        </Link>
        <Link to="/save" className="nav-link">
          Save
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarToggle;

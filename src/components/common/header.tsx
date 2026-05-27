import { Badge, Navbar, Nav, NavLink } from "react-bootstrap";
import styles from "./header.module.css";
import Cart from "../ecommerce/cart/cart";
import Container from "react-bootstrap/Container";
const Header = () => {
  return (
    <header>
      <div className={styles.logocontainer}>
        <h1 className={styles.logo}>
          <span className={styles.logospan}>My</span>
          <Badge>App</Badge>
        </h1>
        <Cart />
      </div>
      <Navbar 
       expand="lg" 
       className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about">
                about
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Nav.Link as={NavLink} to="login">
                login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

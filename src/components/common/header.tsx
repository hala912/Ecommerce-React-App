import { Badge, Navbar, Nav } from "react-bootstrap";
import styles from "./header.module.css";
import Cart from "../ecommerce/cart/cart";


const Header = () => {
  return (
    <header>
      <div className={styles.logocontainer}>
        <h1 className={styles.logo}>
          <span className={styles.logospan}>My</span>
          <Badge bg="dark">App</Badge>
          
        </h1>
        <Cart />
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <div className="container-fluid">
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">categories</Nav.Link>
              <Nav.Link href="#">about</Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Nav.Link href="#">login</Nav.Link>
              <Nav.Link href="#">signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;

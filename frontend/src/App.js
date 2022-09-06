import logo from "./logo.svg";
import "./App.css";
import Homescreen from "./Screens/homescreen";
import ProductScreen from "./Screens/productscreen";
import SigninScreen from "./Screens/SigninScreen";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/esm/Badge";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./Screens/Cartscreen";
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" vairant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="text-white">MKT</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link text-secondary">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/singin" element={<SigninScreen />} />
              <Route path="/" element={<Homescreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

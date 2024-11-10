import React, { useState } from "react";

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import UserCart from "../utilisateur/UserCart";

const Entete = ({ user, handleRole, cart, handleInc, handleDec }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="Entete">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Ecommerce App</Navbar.Brand>
            {user.role === "user" ? (
              <>
                <Button variant="outline-success" onClick={handleShow}>
                  Cart
                </Button>
                <UserCart
                  cart={cart}
                  show={show}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  handleInc={handleInc}
                  handleDec={handleDec}
                />
              </>
            ) : null}

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form.Select
                style={{ width: "200px", margin: "2px" }}
                value={user.role}
                onChange={(e) => handleRole(e.target.value)}
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
              </Form.Select>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={user.image} alt="" height={"25 px"} />
                <h4>{user.name}</h4>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Entete;

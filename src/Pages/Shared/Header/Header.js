import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          bg="dark"
          variant="dark"
          className="nav-height"
        >
          <Container>
            <Navbar.Brand className="fw-bold fs-3 text-info" as={Link} to="/">
              FRUITS WAREHOUSE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="fw-bold" href="home">
                  HOME
                </Nav.Link>
                <Nav.Link className="fw-bold" href="home#services">
                  SERVICES
                </Nav.Link>
                <Nav.Link className="fw-bold" href="home#experts">
                  EXPARTS
                </Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <>
                    <Nav.Link
                      className="fw-bold"
                      as={Link}
                      to="manage"
                    >
                      MANAGE ITEM
                    </Nav.Link>
                    <Nav.Link
                      className="fw-bold"
                      as={Link}
                      to="addservice"
                    >
                      ADD ITEM
                    </Nav.Link>
                    <Nav.Link
                      className="fw-bold"
                      as={Link}
                      to="orders"
                    >
                      MY ITEM
                    </Nav.Link>
                  </>
                )}
                {user ? (
                  <Nav.Link
                    className="fw-bold"
                    onClick={handleSignOut}
                    as={Link}
                    to=""
                  >
                    SIGN IN
                  </Nav.Link>
                ) : (
                  <Nav.Link className="fw-bold" as={Link} to="login">
                    LOGIN
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;
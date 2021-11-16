import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        variant="dark"
        style={{ background: "rgb(51, 53, 69)" }}
      >
        <Container style={{ background: "rgb(51, 53, 69)" }}>
          <Navbar.Brand href="/">
            <div className="sc-hmXxxW jyErKW">
              <Button
                href="/"
                className="sc-cqCuEk ZhJsY"
                style={{
                  // backgroundColor: "rgb(51, 53, 69)",
                  // borderColor: "rgb(51, 53, 69)",
                  backgroundColor: "rgb(51, 53, 69)",
                  borderColor: "rgb(51, 53, 69)",
                }}
              >
                <img
                  src="./LogoCafe.png"
                  style={{ maxHeight: "50px" }}
                  alt="mainlogo"
                />
              </Button>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "57px", margin: "-6px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action2">Movies</Nav.Link> */}
              <NavDropdown title="Features" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/movies">All Dishes</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex col-5">
              <FormControl
                type="search"
                placeholder="Search for Movies, Events, Sports and Activities"
                className="mr-2"
                aria-label="Search"
              />
            </Form>

            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", paddingLeft: "13.5rem" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action2">Movies</Nav.Link> */}
              <NavDropdown
                title="NCR"
                id="navbarScrollingDropdown"
                className="ml-5"
              >
                <NavDropdown.Item href="/movies">NCR</NavDropdown.Item>
                <NavDropdown.Item href="#action4">GUJARAT</NavDropdown.Item>
                <NavDropdown.Item href="#action4">RAJASTHAN</NavDropdown.Item>
                <NavDropdown.Item href="#action4">HYDERABAD</NavDropdown.Item>
                <NavDropdown.Item href="#action4">LUCKNOW</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Button
              style={{
                backgroundColor: "rgb(248, 68, 100)",
                border: "rgb(248, 68, 100",
                padding: "1px 6px",
                marginLeft: "7px",
              }}
              href="/register"
            >
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        style={{ background: "rgb(31, 37, 51) ", color: "#c9ced5" }}
      >
        <div className="d-flex" style={{ display: "flex", color: "#c9ced5" }}>
          <div>
            <Nav className="me-auto" style={{ color: "#c9ced5" }}>
              <Nav.Link href="#features" style={{ color: "#c9ced5" }}>
                Movies{" "}
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "#c9ced5" }}>
                Streams
              </Nav.Link>
              <Nav.Link href="#features" style={{ color: "#c9ced5" }}>
                Events
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "#c9ced5" }}>
                Plays
              </Nav.Link>
              <Nav.Link href="#features" style={{ color: "#c9ced5" }}>
                Sports
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "#c9ced5" }}>
                Activities
              </Nav.Link>
              <Nav.Link href="#features" style={{ color: "#c9ced5" }}>
                Buzz
              </Nav.Link>
            </Nav>
          </div>

          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#pricing" style={{ color: "#c9ced5" }}>
              ListYourShow
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "#c9ced5" }}>
              Corporates
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#c9ced5" }}>
              Offers
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "#c9ced5" }}>
              Gift Cards
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </div>
  );
}

export default Header;

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Banner from "../Components/Banner";
import { getProviders, signIn } from "next-auth/react";

function home({ providers }) {
  return (
    <div>
      <Navbar expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="#">
            <h1 className="nav-title">Keepper</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav" className="colapse">
            <Nav
              className="ms-auto me-4 nav-items"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="details-nav">
                <Nav.Link href="#action1">About this project</Nav.Link>
                <Nav.Link href="#action2">Portfolio</Nav.Link>
              </div>
            </Nav>

            <Nav className="cont-icon">
              <Nav.Link href="https://www.linkedin.com/in/christian-soto-3a0a24240/">
                <LinkedInIcon className="nav-icon me-2" fontSize="large" />
              </Nav.Link>
              <Nav.Link href="t.me/Christian_Soto_Martinez">
                <TelegramIcon className="nav-icon me-2" fontSize="large" />
              </Nav.Link>

              <Nav.Link href="https://github.com/ChrisSotoMtz">
                <GitHubIcon className="nav-icon me-2" fontSize="large" />
              </Nav.Link>
            </Nav>

            {Object.values(providers).map((provider) => (
              <div key={provider.name} className="button-container">
                <Button
                  className="log-button"
                  onClick={() => signIn(provider.id)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner />
    </div>
  );
}
export default home;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

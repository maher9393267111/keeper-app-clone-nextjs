import React from "react";
import { Avatar } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AddIcon from "@mui/icons-material/Add";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";

import { motion } from "framer-motion";

function Header() {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <div>
      <Navbar expand="lg" variant="light" className="navbar-main">
        <Container fluid>
          <Navbar.Brand href="#">
            <h1 className="nav-title-home">Keeper</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto me-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav>
  
     
                <AddIcon
                  className="nav-button"
                  fontSize="large"
                  onClick={() => {
                    setModalOpen(true);
                    setModalType("dropIn");
                  }}
                />
      

              <Avatar
                src={session?.user?.image}
                onClick={() => signOut()}
                className="nav-avatar"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

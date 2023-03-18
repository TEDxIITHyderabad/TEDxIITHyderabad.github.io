import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavbarComp(){
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const router = useRouter();
  const path = router?.pathname;
    return (
      
          <Navbar expand="lg" className={`${styles.site_header}`}>
              <Container>
                <Navbar.Brand href="/" className={`${styles.brand}`}><img className={`${styles.navbar_logo}`} src="/tedx_logo.png" alt="TEDx IITHyderabad"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${styles.hamburger}`} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav " className={`justify-content-end ${styles.navigation_menu}`}>
                  <Nav >
                    <Nav.Link style={{color: (path=="/")?"#F02D23":""}} href="/">Home</Nav.Link>
                    <Nav.Link style={{color: (path=="/aboutus")?"#F02D23":""}} href="/aboutus">About Us</Nav.Link>
                    <Nav.Link style={{color: (path=="#")?"#F02D23":""}} href="#">Event Info</Nav.Link>
                    <Nav.Link style={{color: (path=="#")?"#F02D23":""}} href="#">Speakers</Nav.Link>

                    <NavDropdown title="Campus Outreach" id="basic-nav-dropdown">
                      <NavDropdown.Item style={{color: (path=="#")?"#F02D23":""}} className={`${styles.dropdown_item}`} href="#action/3.1">Campus Outreach</NavDropdown.Item>
                      <NavDropdown.Item style={{color: (path=="#")?"#F02D23":""}} className={`${styles.dropdown_item}`} href="#action/3.2">
                        Leaderboard
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link style={{color: (path=="#")?"#F02D23":""}} href="#">Contact Us</Nav.Link>
                    <Nav.Link style={{color: (path=="#")?"#F02D23":""}} href="#">Partners</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )

}
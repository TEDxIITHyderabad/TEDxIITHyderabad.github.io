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
                    <Nav.Link style={{color: (path=="/events")?"#F02D23":""}} href="/events">Event Info</Nav.Link>
                    {/* <Nav.Link style={{color: (path=="/speakersupcoming")?"#F02D23":""}} href="/speakersupcoming">Speakers</Nav.Link> */}

                    <NavDropdown title="SPEAKERS" className={styles.dropdowncss} id="basic-nav-dropdown">
                      <div className={styles.subitem}>Upcoming Speakers</div>
                      <NavDropdown.Item style={{color: (path=="/speakersupcoming")?"black":""}} className={`${styles.dropdown_item}`} href="/speakersupcoming">
                        2023
                      </NavDropdown.Item>
                      <div className={styles.subitem}>Past Speakers</div>
                      <NavDropdown.Item style={{color: (path=="/speakers2022")?"black":""}} className={`${styles.dropdown_item}`} href="/speakers2022">
                        2022
                      </NavDropdown.Item>
                      <NavDropdown.Item style={{color: (path=="/speakers2021")?"black":""}} className={`${styles.dropdown_item}`} href="/speakers2021">
                        2021
                      </NavDropdown.Item>
                      <NavDropdown.Item style={{color: (path=="/speakers2019")?"black":""}} className={`${styles.dropdown_item}`} href="/speakers2019">
                        2019
                      </NavDropdown.Item>
                      <NavDropdown.Item style={{color: (path=="/speakers2017")?"black":""}} className={`${styles.dropdown_item}`} href="/speakers2017">
                        2017
                      </NavDropdown.Item>
                      <NavDropdown.Item style={{color: (path=="/speakers2016")?"black":""}} className={`${styles.dropdown_item}`} href="/speakers2016">
                        2016
                      </NavDropdown.Item>
                      <NavDropdown.Item style={{color: (path=="/speakers2015")?"black":""}} className={`${styles.dropdown_item}`} href="/speakers2015">
                        2015
                      </NavDropdown.Item>
                      <div className={styles.subitem}></div>
                    </NavDropdown>
                    <Nav.Link style={{color: (path=="/team")?"#F02D23":""}} href="/team">Team</Nav.Link>
                    <Nav.Link style={{color: (path=="/partners")?"#F02D23":""}} href="/partners">Partners</Nav.Link>
                    <Nav.Link style={{color: (path=="/contactus")?"#F02D23":""}} href="/contactus">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )

}
import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";
// import { useEffect , useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowDown19, faArrowDown91, faArrowDownShortWide, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

// var $ = require("jquery");

export default function NavbarComp(){
    // useEffect(() => {
    //     $(window).on('scroll', function () {
    //         var scroll = $(window).scrollTop();
    //         if (scroll < 400) {
    //         $("#sticky_header").removeClass(`${styles.sticky}`);
    //         } else {
    //         $("#sticky_header").addClass(`${styles.sticky}`);
    //         }
    //     });
    // })
    return (
          <Navbar expand="lg" sticky="top" variant="dark" bg="black">
            <Container>
              <Navbar.Brand href="/"><img src="/brand/tedx.png" alt="TEDx IITHyderabad" height={30}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto" >
                  <Nav.Link href="/" className={`${styles.navbar_link}`}>Home</Nav.Link>
                  <Nav.Link href="/speakers" className={`${styles.navbar_link}`}>Speakers</Nav.Link>
                  <Nav.Link href="/sponsors" className={`${styles.navbar_link}`}>Sponsors</Nav.Link>
                  <Nav.Link href="/team" className={`${styles.navbar_link}`}>Team</Nav.Link>
                  <Nav.Link href="/contact" className={`${styles.navbar_link}`}>Contact Us</Nav.Link>
                  <NavDropdown menuVariant="dark" className={`${styles.dropdown_menu_dark}`} title={<span className={`${styles.navbar_link}`} > CA program </span>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2" className={`${styles.navbar_link}`}>
                      Incentives
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" className={`${styles.navbar_link}`} >
                      Leaderboard
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                      <Link href="#" className={styles.boxed_btn_white} passHref>Buy Ticket</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )

}
import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";

export default function NavbarComp(){
    return (
          <Navbar expand="lg" sticky="top" variant="dark" bg="black">
            <Container>
              <Navbar.Brand href="/"><img src="/TEDx_White_T.png" alt="TEDx IITHyderabad" height={60}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto" >
                  <Nav.Link href="/" className={`${styles.navbar_link}`}>Home</Nav.Link>
                  <Nav.Link href="/speakers" className={`${styles.navbar_link}`}>Speakers</Nav.Link>
                  <Nav.Link href="/sponsors" className={`${styles.navbar_link}`}>Sponsors</Nav.Link>
                  <Nav.Link href="/team" className={`${styles.navbar_link}`}>Team</Nav.Link>
                  <Nav.Link href="/contactus" className={`${styles.navbar_link}`}>Contact Us</Nav.Link>
//                   <NavDropdown menuVariant="dark" className={`${styles.dropdown_menu_dark}`} title={<span className={`${styles.navbar_link}`} > CA program </span>} id="basic-nav-dropdown">
//                     <NavDropdown.Item href="/CA/aboutus" className={`${styles.navbar_link_dropdown}`}>
//                       About Us
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/CA/incentives" className={`${styles.navbar_link_dropdown}`}>
//                       Incentives
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/CA/leaderboard" className={`${styles.navbar_link_dropdown}`} >
//                       Leaderboard
//                     </NavDropdown.Item>
//                   </NavDropdown>
                </Nav>
                <Nav>
                      <Link href="#" className={styles.boxed_btn_white} passHref>Tickets Coming soon</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          // <header className="section page-header">
          //   <nav className={`${styles.navigation}`}>

          //     <div className={`${styles.logo}`}>
          //       <h1>LOGO</h1>
          //     </div>

          //     <ul className={`${styles.menu_list}`}>
          //       <li><a href="ca-index.html">Home</a></li>
          //       <li><a href="about.html">About</a></li>
          //       <li><a href="#">Services</a></li>
          //       <li><a href="#portfolio">Project</a></li>
          //       <li><a href="#">Contact Us</a></li>
          //     </ul>

          //     <div className={`${styles.humbarger}`}>
          //       <div className={`${styles.bar}`}></div>
          //       <div className={`${styles.bar}`}></div>
          //       <div className={`${styles.bar}`}></div>
          //     </div>
          //   </nav>
          // </header>
    )

}

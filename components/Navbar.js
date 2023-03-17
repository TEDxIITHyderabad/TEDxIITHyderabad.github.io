import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";


export default function Navbar(){
  const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
      
          <header className={`${styles.site_header}`}>
            <div className={`${styles.site_header__wrapper}`}>
              <a href="#" className={`${styles.brand}`}><img className={`${styles.navbar_logo}`} src="/tedx_logo.png" alt="TEDx IITHyderabad"/></a>
              <nav className="nav">
              <button
                className={`${styles.hamburger}`}
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
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
                </button>
                <div 
                className={isNavExpanded?`${styles.navigation_menu} ${styles.expanded}`:`${styles.navigation_menu}`}>
                  <ul className={isNavExpanded?`${styles.dropdown_menu}`:``}>
                    <li ><a href="#">Home</a></li>
                    <li ><a href="/aboutus">About Us</a></li>
                    <li ><a href="#">Event Info</a></li>
                    <li ><a href="#">Speakers</a></li>
                    <li ><a href="#">Campus Outreach</a></li>
                    <li ><a href="#">Contact Us</a></li>
                    <li ><a href="#">Partners</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>

    )

}
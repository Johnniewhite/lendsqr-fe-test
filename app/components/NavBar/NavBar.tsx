"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.scss";
import profileImage from "@/app/assets/profile.png";
import SideBar from "../SideBar/page";

interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.navBar}>
      <nav className={styles.navElement}>
        {/* Hamburger icon to toggle the sidebar (visible on mobile) */}
        <div className={styles.hamburger} onClick={toggleSidebar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        {/* Your company logo */}
        <Image src={logo} className={styles.logo} alt="LOGO" />
        {/* Search bar */}
        <div className={styles.searchElement}>
          <div className={styles.searchBar}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for anything"
            />
            <div className={styles.searchButtonDiv}>
              <button type="submit" className={styles.searchButton}>
                {/* Search icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  {/* Search icon SVG */}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Profile Image (visible on mobile) */}
        <div className={styles.secondPart}>
          <Image
            src={profileImage}
            className={styles.profilePhoto}
            alt="profile image"
          />
        </div>
      </nav>
      {/* Sidebar (shown/hidden based on isSidebarOpen state) */}
      <div
        className={`${styles.sideNavigation} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      ></div>
    </div>
  );
};

export default NavBar;

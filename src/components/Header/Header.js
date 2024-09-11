"use client";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { Sun, Moon } from "react-feather";

import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";

import { LIGHT_TOKENS, DARK_TOKENS, COLOR_THEME_COOKIE } from "@/constants";

function Header({ initialColorTheme }) {
  const [colorTheme, setColorTheme] = React.useState(initialColorTheme);

  function handleColorThemeChange() {
    const newColorTheme = colorTheme === "light" ? "dark" : "light";
    setColorTheme(newColorTheme);
    Cookies.set(COLOR_THEME_COOKIE, newColorTheme, { expires: 1000 });

    const newTokens = newColorTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    const pageRoot = document.documentElement;

    pageRoot.setAttribute("data-color-theme", newColorTheme);

    Object.entries(newTokens).forEach(([key, value]) => {
      pageRoot.style.setProperty(key, value);
    });
  }
  return (
    <div className={styles.head}>
      <Link href="/" className={styles.logoWrapper}>
        <div className={styles.logoText}>
          nathan.
          <span className={styles.logoSubtext}>development</span>
        </div>
      </Link>
      <Navbar />
      <button
        onClick={handleColorThemeChange}
        className={styles.darkModeButton}
      >
        {colorTheme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
export default Header;

import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { Sun, Moon } from "react-feather";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.head}>
      <Link href="/" className={styles.logoWrapper}>
        <div className={styles.logoText}>
          nathan.
          <span className={styles.logoSubtext}>developement</span>
        </div>
      </Link>
      <Navbar />
      <button className={styles.darkModeButton}>
        <Sun />
      </button>
    </div>
  );
}
export default Header;

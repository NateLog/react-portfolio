import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { Sun, Moon } from "react-feather";

function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoText}>
          nathan.
          <span className={styles.logoSubtext}>developement</span>
        </div>
      </div>
      <Navbar />
      <button className={styles.darkModeButton}>
        <Sun />
      </button>
    </div>
  );
}
export default Header;

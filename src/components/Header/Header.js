import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src="/AnimeMe.jpeg" />
        <div className={styles.logoText}>Nathan Wright</div>
      </div>
      <nav>
        <ul className={styles.navlinks}>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact Me</a>
          </li>
          <li>
            <a href="About">About Me</a>
          </li>
        </ul>
      </nav>
      <button>Do something soon</button>
    </div>
  );
}
export default Header;

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <p>
          This website has been built using Next.js, React and Framer Motion.
        </p>
      </div>
    </div>
  );
}
export default Footer;

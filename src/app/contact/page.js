import styles from "./contact.module.css";

function ContactPage() {
  return (
    <div className={styles.shortTextWrapper}>
      <h1>I'm always eager to get in touch!</h1>
      <p>
        If you know of a social software gathering in or around London then
        definitely let me know and maybe we can meet up, for now the best way to
        reach me is on my linkedIn profile{" "}
        <a
          href="https://www.linkedin.com/in/nathan-wright-a5191a82/"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
export default ContactPage;

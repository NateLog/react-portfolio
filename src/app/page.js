import styles from "./page.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.main}>body</div>
      <Footer />
    </div>
  );
}

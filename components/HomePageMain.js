import styles from "../styles/HomePageMain.module.scss";
import Link from "next/link";
import ThemesContainer from "./ThemesContainer";
import Input from "./Input";
export default function HomePageMain() {
  return (
    <div className={styles.Cont}>
      <Input></Input>
      <div className={styles.Button}>
        <Link href="/Game">
          <a className={styles.Link}>Singleplayer</a>
        </Link>
      </div>
      <div className={`${styles.Button} ${styles.Disabled}`}>
        <Link href="/">
          <a className={`${styles.Link} ${styles.Disabled}`}>Multiplayer</a>
        </Link>
      </div>
      <div className={`${styles.Button} ${styles.Disabled}`}>
        <Link href="/">
          <a className={`${styles.Link} ${styles.Disabled}`}>Play with friend</a>
        </Link>
      </div>
      <ThemesContainer></ThemesContainer>
    </div>
  );
}

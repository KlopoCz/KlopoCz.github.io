import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "../components/Button";
import ThemesContainer from "../components/ThemesContainer";
export default function Home() {
  return (
    <div>
      <h1>Totally legit Tic Tac Toe</h1>
      <div className={styles.buttonCont}>
        <Link href="/Game">
          <a>single player</a>
        </Link>
        <ThemesContainer></ThemesContainer>
      </div>
    </div>
  );
}

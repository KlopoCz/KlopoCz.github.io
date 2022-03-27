import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>welcome to this amazing tic tac toe game mark 5(probably, i lost count)</h1>
      <Link href="/Game">
        <a>start a game </a>
      </Link>{" "}
      <div className={styles.preloadCircle}></div>
      <div className={styles.preloadNone}></div>
    </div>
  );
}

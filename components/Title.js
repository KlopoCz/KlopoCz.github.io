import styles from "../styles/Title.module.scss";
export default function Title() {
  return (
    <div className={styles.titleCont}>
      <h2 className={styles.titleSmall}>
        Definitely <span>not</span> sketchy
      </h2>
      <h1 className={styles.titleMain}>Tic Tac Toe</h1>
    </div>
  );
}

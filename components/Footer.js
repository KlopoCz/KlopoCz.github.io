import styles from "../styles/Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.Cont}>
      <h2 className={styles.Version}>V 1.0.0</h2>
      <a className={styles.Link}>GitHub</a>
    </div>
  );
}

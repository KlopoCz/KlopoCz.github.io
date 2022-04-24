import styles from "../styles/Button.module.scss";
export function Button({ children, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

export function ButtonMain({ children }) {
  return (
    <div className={styles.containerMain}>
      <h1 className={styles.titleMain}>{children}</h1>
    </div>
  );
}

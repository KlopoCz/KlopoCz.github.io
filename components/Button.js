import styles from "../styles/Button.module.scss";
export default function Button({ children, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

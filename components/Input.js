import styles from "../styles/Input.module.scss";
export default function Input() {
  return (
    <div className={styles.Cont}>
      <h2 className={styles.Label}>Nick</h2>
      <div className={styles.Wrap}>
        <input className={styles.Input} type="text"></input>
        <span className={styles.Line}> </span>
      </div>
    </div>
  );
}

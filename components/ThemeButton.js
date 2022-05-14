import styles from "../styles/ThemeButton.module.scss";
export default function ThemeButton({ changeTheme, text, color, border }) {
  return (
    <div
      onClick={() => changeTheme(text)}
      style={{ backgroundImage: color, border: border }}
      className={styles.button}
    ></div>
  );
}

import Image from "next/image";
import styles from "../styles/Alert.module.scss";
import logo from "../public/logoContainer.svg";
import Button from "./Button";
export default function Alert({ gameRestart }) {
  return (
    <div className={styles.shadow}>
      <div className={styles.container}>
        <Image className={styles.image} src={logo} width="164px" height="98px"></Image>
        <h1 className={styles.title}>Congratulation!</h1>
        <h2 className={styles.subTitle}>You have successfully defeated your opponent</h2>
        <div className={styles.buttonContainer}>
          <Button onClick={gameRestart}>Play Again</Button>
        </div>
      </div>
    </div>
  );
}

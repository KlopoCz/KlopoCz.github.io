import Image from "next/image";
import styles from "../styles/Alert.module.scss";
import logo from "../public/logoContainer.svg";
import Button from "./Button";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function Alert({ gameRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      key="back"
      className={styles.shadow}
    >
      <motion.div
        initial={{ x: "-50%", y: -855, opacity: 0 }}
        animate={{ x: "-50%", y: -155, opacity: 1 }}
        exit={{ x: "-50%", y: -155, opacity: 0 }}
        key="cont"
        className={styles.container}
      >
        <Image className={styles.image} src={logo} width="164px" height="98px"></Image>
        <h1 className={styles.title}>Congratulation!</h1>
        <h2 className={styles.subTitle}>You have successfully defeated your opponent</h2>
        <div className={styles.buttonContainer}>
          <Button onClick={gameRestart}>Play Again</Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

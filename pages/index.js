import styles from "../styles/Home.module.css";
import { Button } from "../components/Button";
import Title from "../components/Title";
import HomePageMain from "../components/HomePageMain";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Title></Title>
      <HomePageMain></HomePageMain>
      <Footer></Footer>
    </div>
  );
}

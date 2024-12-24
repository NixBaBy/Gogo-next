import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import { HeroNews } from "@/components/HeroNews";
import { SmallNews } from "@/components/SmallNews";
import { Gogostory } from "@/components/Gogostory";
import { OtherNews } from "@/components/OtherNews";
import { PopularNews } from "@/components/PopularNews";
import { Interview } from "@/components/Interview";
import { GogoStyle } from "@/components/GogoStyle";
import { Watch } from "@/components/Watch";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.containers}>
        <Header />
        <HeroNews />
        <SmallNews />
        <Gogostory />
        <div className={styles.toNews}>
          <OtherNews />
          <div className={styles.line}></div>
          <PopularNews />
        </div>
        <Interview />
        <GogoStyle />
      </div>
      <Watch />
      <Footer />
    </div>
  );
}

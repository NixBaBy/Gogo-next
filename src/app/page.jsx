import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import { HeroNews } from "@/components/HeroNews";
import { SmallNews } from "@/components/SmallNews";
import { Gogostory } from "@/components/Gogostory";
import { OtherNews } from "@/components/OtherNews";
import { PopularNews } from "@/components/PopularNews";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <HeroNews />
      <SmallNews />
      <Gogostory />
      <div className={styles.toNews}>
        <OtherNews />
        <PopularNews />
      </div>
    </div>
  );
}

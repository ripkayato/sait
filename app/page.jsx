
import prisma from "../lib/prisma"
import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/card/Card";

export default async function Home() {

  const cardList = await prisma.Card.findMany();
    

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.title}>Часть магазина из игры Dota 2 </div>
      
        <div className={styles.pluginGrid}>
          {cardList.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              price={item.price}
              imgSrc={item.imgScr}
  
            />
          ))}
        </div>
      </main>
    </div>
  );
}


import prisma from "@/lib/prisma"
import styles from "./page.module.css";
import Image from "next/image";

// Пример данных о товарах
const products = [
  { id: "1", title: "Tango", price: "90 Gold", imgSrc: "/plugin1.png", description: "Берите всегда на лайн." },
  { id: "2", title: "Observer ward", price: "Free!", imgSrc: "/plugin2.png", description: "Сапортам всегда покупать, они бесплатные!." },
  { id: "3", title: "Smoke of Deceit", price: "50 Gold ", imgSrc: "/plugin3.png", description: "Многие о нем забывают, но вы не совершайте чужие ошибки." },
  { id: "4", title: "Dust of Appearance", price: "80 Gold", imgSrc: "/plugin4.png", description: "Невидимость контрится этим, не глупите и берите." },
];

export default async function ProductPage({ params }) {
  const { id } = await params

  // Ищем продукт по ID
  const products = await prisma.Card.findMany();

  // Если товар не найден
  if (!products) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        { products.map((product) =>{
          if (id==product.id)
          return(
          <>
                  <Image className={styles.img} src={product.imgScr} alt={product.title} width={400} height={400} />
                  <h1 className={styles.title}>{product.title}</h1>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.price}>{product.price}</p>
          </>)
        })
      }
        <button className={styles.buyButton}>Купить</button>
      </div>
    </div>
  );
}

import styles from "@/app/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ id, title, price, imgSrc }) => {
  return (
    <div className={styles.pluginCard}>
      <Link href={`/product/${id}`} className={styles.linkContent}>
        <div>
          <Image className={styles.img} src={imgSrc} alt={title} width={260} height={260} />
          <h2><p className={styles.title}>{title}</p></h2>
        </div>
      </Link>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

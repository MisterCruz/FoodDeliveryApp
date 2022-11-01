import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/featured1.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Delicious pizza made in our wood fired oven.
      </p>
    </div>
  )
}
export default PizzaCard;
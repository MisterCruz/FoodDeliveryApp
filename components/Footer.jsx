import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" objectFit="cover" alt=""/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE BEST PIZZA IN TOWN!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> San Francisco, 95959
            <br /> (415) 444-4444
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HOURS OF OPERATION</h1>
          <p className={styles.text}>
            Saturday - Sunday
            <br /> 9AM - 1AM
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
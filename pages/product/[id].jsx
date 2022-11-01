import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);

    const pizza = {
        id: 1, 
        img: "/img/featured1.png",
        name: "CAMPAGNOLA",
        price: [19.90, 23.90, 27.90],
        desc: "Lorem upsum dolor sit amet, conectetur adipiscing elit"
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image alt="" objectFit="contain" src={pizza.img} layout="fill" />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/img/size.png" alt="" layout="fill" />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/img/size.png" alt="" layout="fill" />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/img/size.png" alt="" layout="fill" />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="extraCheese" name="extraCheese" className={styles.checkbox} />
                    <label htmlFor="extraCheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="garlicSauce" name="garlicSauce" className={styles.checkbox} />
                    <label htmlFor="garlicSauce">Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product
import styles from "../styles/AddButton.module.css"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

const Add = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span onClick={() => setClose(true)} className={styles.close}>X</span>
            <h1>Add a new pizza</h1>
            <div className={styles.item}>
                <label className={styles.label}>Choose an image</label>
                <input type="file" />
            </div>
        </div>
    </div>
  )
}

export default Add
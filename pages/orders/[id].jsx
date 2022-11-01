import styles from "../../styles/Orders.module.css"
import Image from "next/image"

const Order = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.left}>
            <div className={styles.row}><table className={styles.table}>
                    <tbody>
                    <tr className={styles.tr}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <span className={styles.id}>1289129</span>
                    </td>
                    <td>
                        <span className={styles.name}>John Doe</span>
                    </td>
                    <td>
                        <span className={styles.address}>Elton St. 212-33 SF</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.80</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={styles.row}>
                <div className={styles.status}>
                    <Image src="/img/paid.png" width={30} height={30} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal: </b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount: </b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total: </b>$79.60
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>

  )
}

export default Order
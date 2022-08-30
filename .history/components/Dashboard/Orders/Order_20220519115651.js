import Image from "next/image";
import styles from './Order.module.css';

const Order = () =>{
    return(
        <div className={styles.cardContainer}>
            <div className={styles.orderDescription}>
                <div className={styles.state} >
                    <span>تحویل شده</span>
                  <Image src="/static/icons/tick-circle.svg" alt="Tick Icon"
                      width={18} height={18}/>
                </div>
                <span className={styles.date}>۷ اسفند ۱۳۹۸</span>
                <div className={styles.price}>
                    <span>مبلغ سفارش</span>
                </div>
            </div>
            <div className={styles.items}>
                <div className={styles.itemImg}>
                    <Image src="/static/img/shirt.png" alt="item Image"
                      width={18} height={18}/>
                </div>
            </div>
        </div>
    );
};
export default Order;
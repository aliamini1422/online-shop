import styles from "./OrdersList.module.css";

const OrdersList = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h4>سفارشات</h4>
                </div>
                <div className={styles.orders}>
                    <div className={styles.order}></div>
                </div>
            </div>
        </div>
    );
};
export default OrdersList;
import styles from "./SubCard.module.css";
import Image from "next/image";

const SubCard = (props) =>{
    const formatToCurrency = amount => {
        return amount.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      };
    // console.log(props);
    return(
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <div className={styles.imgWrapper}>
                    <Image className={styles.img} src={props.cards.imgSrc} alt="User Dashbourd"
                        layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className={styles.contentBx}>
                <div className={styles.price}>
                    <strong>{formatToCurrency(props.cards.priceWithOff)}</strong>
                    <span><s>{formatToCurrency(props.cards.price)}</s></span>
                </div>
                <div className={styles.offNum}> <p>{props.cards.off}</p></div>
            </div>
        </div>
    );
};

export default SubCard;
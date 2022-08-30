import styles from '../../styles/Home.module.css'

import { useRouter} from "next/router";
import { useState , useEffect } from "react";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';
import { menSectionShow, womenSectionShow, kidSectionShow} from '../../lib/Items';
const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    //for subCategory
    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/menSection.jpg"},
    ];
    
    //Seprate base on MainCategory
    const cards = [];
    if (name === "men") {
        cards = menSectionShow;
    }else if (name === "women") {
        cards = womenSectionShow;
    }else if (name === "kids") {
        cards = kidSectionShow;
    }
    // for Cards that shows 
    const [showCards, setShowCards] = useState(cards);

    // Seprate base on subCategory
    const type1 = [];
    const type2 = [];
    const type3 = [];
    cards.filter((item, index)=>{
        if (item.category.includes("t1")) {
            type1.push(item);
        }
        if (item.category.includes("t2")) {
            type2.push(item);
        }
        if (item.category.includes("t3")) {
            type3.push(item);
        }
    })

    //for reloading showCards
    useEffect(()=>{
        setShowCards(cards);
    },[name]);


    const categoryClickHandler = (itemName, e)=> {
        e.preventDefault();
        if (itemName === "تیشرت") {
            setShowCards(type1);
        }else if (itemName === "پیراهن") {
            setShowCards(type2);
        }else if (itemName === "زمستانی") {
            setShowCards(type3);
        }
    };


    return(
        <div className={styles.mainCategory}>
            <SubCategory type={category} clickHandler={categoryClickHandler}/>
            <CardSection title={name} cards={showCards ? showCards : cards}/>
        </div>
        );

};

export default CategoryName;
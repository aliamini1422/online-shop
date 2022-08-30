import styles from '../../styles/Home.module.css'

import { useRouter} from "next/router";
import { useState , useEffect } from "react";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';
import { menSectionShow, womenSectionShow, kidSectionShow} from '../../lib/Items';
import Head from 'next/head';

const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    //for subCategory
    const category = [
    ];
    
    //Seprate base on MainCategory
    const cards = [];
    if (name === "men") {
        cards = menSectionShow;
        category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/menTshirt1.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/menFormal.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/menHoodi.jpg"},
    ];
    }else if (name === "women") {
        cards = womenSectionShow;
        category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/womenTshirt.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/womenFormal.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/womenHoodi.jpg"},
    ];
    }else if (name === "kids") {
        cards = kidSectionShow;
        category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/kidsTshirt.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/kidsFormal.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/kidsHoodi.jpg"},
    ];
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
    },[name,cards]);


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
             <Head>
                <title>Main Category</title>
                <meta name="website main category" content="Generated by rApToR" />
            </Head>
            <SubCategory type={category} clickHandler={categoryClickHandler}/>
            <CardSection title={name} cards={showCards ? showCards : cards}/>
        </div>
        );

};

export default CategoryName;
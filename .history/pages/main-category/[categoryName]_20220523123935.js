import styles from '../../styles/Home.module.css'

import { useRouter} from "next/router";
import {useState} from "react";
import CardSection from '../../components/UI/cardSection/CardSection';
import SubCategory from '../../components/UI/mainCategory/SubCategory';
import { menSectionShow, womenSectionShow, kidSectionShow } from '../../lib/Items';
const CategoryName = () =>{
    const router = useRouter();
    const name = router.query.categoryName;
    // const cards =
    // [
    //     {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"/static/img/shirt.png"},
    //     {title: "second carousel", subTitle: "this is goal slide for this carousel... ", img:"/static/img/shirt.png", category:"menTshirt"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    //     {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"/static/img/shirt.png"},
    // ];



    const category = [
        {name:"تیشرت", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"پیراهن", url:"/main-category/men", img:"/static/img/menSection.jpg"},
        {name:"زمستانی", url:"/main-category/men", img:"/static/img/menSection.jpg"},
    ];
  
    
    const cards = [];
    if (name === "men") {
        cards = menSectionShow;
    }else if (name === "women") {
        cards = womenSectionShow;
    }else if (name === "kids") {
        cards = kidSectionShow;
    }
    const showCards = [cards];

    const t1Cards = [];
    const t2Cards = [];
    const t3Cards = [];

    const categoryClickHandler = (itemName, e)=> {
     
     showCards =   cards.map((card,index)=>{
               if (card.category.includes("t1")) {
                    t1Cards.push(card);
                    return(t1Cards);
               }else if (card.category.includes("t2")) {
                    t2Cards.push(card);
               }else if (card.category.includes("t3")) {
                    t3Cards.push(card);
               }             
        });
    };

    console.log(showCards);        

    return(
        <div className={styles.mainCategory}>
            <SubCategory type={category} clickHandler={categoryClickHandler}/>
            <CardSection title={name} cards={cards}/>
        </div>
        );

};

export default CategoryName;
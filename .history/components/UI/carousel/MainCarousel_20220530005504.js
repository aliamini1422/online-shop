import styles from "./MainCarousel.module.css";
import Image from "next/image";
import { useState } from "react";
import React from "react"
const MainCarousel =()=>{
    const [curr, setCurr] = useState(0);
    const [x ,setX]=useState(0);

    const bgColor= ["#dfb3bc","#ffe5e5","#f3eed9","#b7d6e2bf"];
    const slides =
    [
        {title: "پیراهن های فصل بهار", subTitle: "فروش ست های بهاری، فصل بهار رو با لباس های بهاری شروع کن ", img:"/static/img/firstSlide.png"},
        {title: "second carousel", subTitle: "this is second slide for this carousel... ", img:"sss"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"sss"},
        {title: "third carousel", subTitle: "this is third slide for this carousel... ", img:"sss"},
    ];

    const goLeft=()=>{
        ( x === 0 ? setX( -100 * (slides.length-1)) : setX(x + 100) );
        (curr === 0 ? setCurr(slides.length - 1) : setCurr(curr - 1));
    };
    const goRight =() =>{
        ( x === -100 * (slides.length -1) ? setX(0) : setX(x - 100) );
        (curr === slides.length - 1 ? setCurr(0) : setCurr(curr + 1));
    };

    const moveDots =index =>{
        setCurr(index);
        setX(index * -100);
    };

    return(

            <div className={styles.slider}>

                {slides.map((slide, index)=>{
                    return(
                     <div key={index} className={styles.slide} style={{transform:`translateX(${x}%)`,
                      background:`${bgColor[index]}`}}>
                         <div className={styles.imgSection}>
                             <img  src={slide.img} alt="slider Picture" />
                         </div>
                         <div className={styles.textSection}>
                             <h1>{slide.title}</h1>
                             <p>{slide.subTitle}</p>
                         </div>
                     </div>   
                    )
                })}
                <button onClick={goLeft} className={styles.left} >
                    <div className={styles.iconWrapper}>
                        <Image className={styles.icon} src="/static/icons/arrow-circle-left.svg" alt="leftArrow icon"
                            layout="fill" objectFit="cover"/>
                    </div>
                </button>
                <button onClick={goRight} className={styles.right}>
                    <div className={styles.iconWrapper}>
                        <Image className={styles.icon} src="/static/icons/arrow-circle-right.svg" alt="rightArrow icon"
                            width="32px" height="32px"/>
                    </div>
                </button>

                <div className={styles.dotsContainer}>
                    {Array.from({length:slides.length}).map((item, index)=>{
                        const dots = 
                        <div
                        key={index}
                        onClick={()=> moveDots(index)}
                        className={styles.dots}
                        ></div>;
                        const active = 
                        <div
                        key={index}
                        onClick={()=> moveDots(index)}
                        className={styles.active}
                        ></div>;

                        return(
                            (curr === index ?  active : dots)
                        );
            })}
                </div>
            </div>
    );
}


export default MainCarousel;
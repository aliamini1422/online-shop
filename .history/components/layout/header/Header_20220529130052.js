import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchBox from "../../UI/searchBox/searchBox";
import cls from "classnames";
import {useState, useEffect} from "react";
import {magic ,loggedIn} from "../../../lib/magicClient";
import Cart from "../../UI/modal/Cart";
import HeaderCartBtn from "./HeaderCartBtn";
const Header =()=>{
    const router = useRouter();
    const url = router.query.categoryName;
    const [userName, setUserName] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [cartIsShown, setCartIsShown] = useState(false);


    useEffect(  () => {
        // Assumes a user is already logged in
        async function fetchData() {
            try {
                const { email, publicAddress } = await magic.user.getMetadata();
                const isLoggedIn = await magic.user.isLoggedIn();
                setUserName(createUserName(email));
                if (isLoggedIn) {
                    setIsLoggedin(true);
                    console.log(isLoggedIn);
                    console.log("hhhhhhhhhhhhhh");
                    // setShowDropdown(true);
                }
              } catch (error) {
                // Handle errors if required!
                console.log("Somthing went wrong", error);
              }
        }
        fetchData();
        
      }, []);



//Slice user email for creating a userName
    const createUserName = (email) =>{
      const index = email.indexOf("@");
      return email.slice(0, index);
    };

    const showDropdownHandler = (e) => {
      e.preventDefault();
      setShowDropdown(!showDropdown);
    };

    const singoutHandler = async (e) => {
        try {
          await magic.user.logout();
          router.push("/login");
          setIsLoggedin(false);
          // console.log(await magic.user.isLoggedIn()); 
        } catch {
          // Handle errors if required!
          router.push("/login");
        }
        e.preventDefault();
      };
    const loginHandler = (e) =>{
        e.preventDefault();
        router.push("/login");
    };
    const dashbourdHandler = (e) =>{
      e.preventDefault();
      loggedIn ? router.push("/user/dashboard") : router.push("/");
      ;

    };
    // const openCartModel=(e)=>{
    //     e.preventDefault();
    // }
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
    const showCartHandler = () => {
      setCartIsShown(true);
    };
  


    const LoggedInUser= 
      <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={showDropdownHandler}
            >
              <p className={styles.username}>{userName}</p>
              <Image src="/static/icons/arrow-down.svg"  alt="Expand dropdown"
                width={18} height={18}/>
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                  <a className={styles.linkName} onClick={dashbourdHandler}>
                    <span>داشبورد</span>
                    <div className={styles.imgWrapper}>
                      <Image src="/static/icons/user.svg" alt="User Dashbourd"
                        width={18} height={18}/>
                    </div>
                  </a>
                  <a className={styles.linkName} onClick={singoutHandler}>
                    <span>خروج از حساب</span>
                    <div className={styles.imgWrapper}>
                        <Image className={styles.logoutLogo} src="/static/icons/logout.svg" alt="User Dashbourd"
                            layout="fill" objectFit="cover"/>
                    </div>
                 
                  </a>
              </div>
            )}
          </div>
        </nav>;



    return(
      <>    
            {cartIsShown && (
              <Cart
                onClose={hideCartHandler}
              />
            )}
            <header className={styles.header} >
                <div className={styles.nav}>
                    <div className={styles.rightNav}>
                        <ul className={styles.navItems}>
                            <li className={cls(styles.navItem,(url== "" &&styles.active))}><Link href="/"><a>صفحه اصلی </a></Link></li>
                            <li className={cls(styles.navItem, (url=="women" &&styles.active) )}><Link href={`/main-category/${["women"]}`}><a>زنانه </a></Link> </li>
                            <li className={cls(styles.navItem, (url=="men" &&styles.active) )}><Link href={`/main-category/${["men"]}`}><a>مردانه </a></Link> </li>
                            <li className={cls(styles.navItem, (url=="kids" &&styles.active) )}><Link href={`/main-category/${["kids"]}`}><a>بچگانه </a></Link> </li>
                        </ul>
                    </div>
                    <div className={styles.leftNav}>
                   
                        <div className={styles.cart}> 
                          <HeaderCartBtn onClick={showCartHandler}/>
                        </div>
                        <div className={styles.line}></div>
                    
                          { isLoggedin === true ?
                              LoggedInUser
                              :
                              <button className={styles.btn} onClick={loginHandler}>
                                  <span>ورود / ثبت نام</span>
                                  <div className={styles.imgWrapper}>
                                      <Image className={styles.loginLogo} src="/static/icons/login.svg" alt="login icon"
                                          layout="fill" objectFit="cover"/>
                                  </div>
                              </button>
                          }  
                     
                       
                        <SearchBox  className={styles.searchComp}/>
                    </div>

                </div>
                <div className={styles.logo}>
                 <a href="/">Sven</a>
                </div>
            </header>
      </>
      
    );

};

export default Header;
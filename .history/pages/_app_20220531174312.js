import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/footer/Footer';
import { CartProvider } from "react-use-cart";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const hanleStart = (url) => (url !== router.asPath) && setLoading(true);
    const hanleComplete = (url) => (url === router.asPath) && setTimeout(()=>{ setLoading(false);}, 500);

    router.events.on('routeChangeStart', hanleStart);
    router.events.on('routeChangeComplete', hanleComplete);
    router.events.on('routeChangeError', hanleComplete);

    return()=>{
      router.events.off('routeChangeStart', hanleStart);
      router.events.off('routeChangeComplete', hanleComplete);
      router.events.off('routeChangeError', hanleComplete);

    }
  })

  return loading && (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}> Loading ...</div>
    </div>
  )
}




function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isDashboard = router.asPath.startsWith("/user");
  const page =
      <CartProvider>
        <Header />
          {/* <Loading /> */}
          <Component {...pageProps} />
        <Footer />
      </CartProvider>;
       
       const dashboard = 
       <CartProvider>
          <Component {...pageProps} />
       </CartProvider>;
  return( 
    <div>
      {isDashboard ? dashboard : page }
    </div>
   
  );
}

export default MyApp

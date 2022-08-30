import Overview from "../../components/Dashboard/overview/Overview";
import DashboardNav from "../../components/layout/header/DashboardNav";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import OrdersList from "../../components/Dashboard/Orders/OrdersList";
import AddressList from "../../components/Dashboard/address/AddressList";
import UserInfo from "../../components/Dashboard/userInfo/UserInfo";

const UserDashboard = () =>{
    const router = useRouter();
    const path = router.query.userDashboard;
    return(
        <div className={styles.wrapper}>
            <div className={styles.nav}> 
                <DashboardNav /> 
               
            </div>
            
            <div className={styles.container}>
                {path === "dashboard" &&  <Overview /> } 
                {path === "orders" && <OrdersList />} 
                {path === "address" && <AddressList />} 
                {path === "orders" && <UserInfo />} 
            </div>
        </div>
    );
};

export default UserDashboard;
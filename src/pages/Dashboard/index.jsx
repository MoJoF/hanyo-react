import styles from "./Dashboard.module.css"
import AdminHeader from "../../components/AdminHeader"
import Footer from "../../components/Footer"

const Dashboard = () => {
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                Здесь пока что пусто
            </div>
            <Footer />
        </>
    )
}

export default Dashboard
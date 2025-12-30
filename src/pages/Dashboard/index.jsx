import styles from "./Dashboard.module.css"
import AdminHeader from "../../components/AdminHeader"
import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"

const Dashboard = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default Dashboard
import styles from "./Dashboard.module.css"
import AdminHeader from "../../components/AdminHeader"
import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"

const Dashboard = () => {
    const authData = localStorage.getItem("auth")
    const url = atob("aHR0cHM6Ly9oYW55by13cml0ZXMub215cmF1Y3kud29ya2Vycy5kZXYvYXV0aA==")
    const headers = { "Content-Type": "application/json" }
    // Если сохранилась запись об авторизации
    if (authData) {
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({ authData })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                    document.location.href = "/admin"
                }
            })
    } else {
        alert("You are not logged")
        document.location.href = "/admin"
    }

    return (
        <>
            <AdminHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default Dashboard
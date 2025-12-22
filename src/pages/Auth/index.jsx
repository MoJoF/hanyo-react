import styles from "./Auth.module.css"
import { useNavigate } from "react-router"


const Auth = () => {
    let nav = useNavigate()
    const authData = localStorage.getItem("auth")
    const url = atob("aHR0cHM6Ly9oYW55by13cml0ZXMub215cmF1Y3kud29ya2Vycy5kZXYvYXV0aA==")
    const headers = { "Content-Type": "application/json" }

    if (authData) {
        fetch(url, {
            method: "POST", headers, body: JSON.stringify({ authData })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.status === "OK") {
                    localStorage.setItem('auth', data.account)
                    nav('/admin')
                }
            })
    }

    return (
        <div className={styles.auth}>
            <input type="text" placeholder="Логин" className={styles.username_input} />
            <input type="password" placeholder="Пароль" className={styles.password_input} />
            <button className={styles.login}>Войти</button>
        </div>
    )
}

export default Auth
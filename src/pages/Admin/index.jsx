import styles from "./Admin.module.css"
import { useNavigate } from "react-router"
import { useState } from "react"


const Admin = () => {
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
                    nav('/dashboard')
                }
            })
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (e) => setUsername(e.target.value)
    const changePassword = (e) => setPassword(e.target.value)


    const authorize = () => {
        const auth = btoa(JSON.stringify({ username, password }))
        const urlLogin = atob("aHR0cHM6Ly9oYW55by13cml0ZXMub215cmF1Y3kud29ya2Vycy5kZXYvbG9naW4=")
        fetch(urlLogin, { method: "POST", headers, body: JSON.stringify({ authData: auth }) })
            .then(resp => resp.json())
            .then(data => {
                if (data.status === "OK") {
                    localStorage.setItem("auth", data.auth)
                    nav('/dashboard')
                }
            })
    }

    return (
        <div className={styles.auth}>
            <input type="text" placeholder="Логин" className={styles.username_input} onInput={e => changeUsername(e)} />
            <input type="password" placeholder="Пароль" className={styles.password_input} onInput={e => changePassword(e)} />
            <button onClick={() => authorize()} className={styles.login}>Войти</button>
        </div>
    )
}

export default Admin
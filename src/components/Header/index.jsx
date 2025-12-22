import { Link } from "react-router"
import styles from "./Header.module.css"
import { memo } from "react"

const Header = memo(() => {
    return (
        <header>
            <Link to="/" className={styles.logo}>hanyo</Link>
            <nav>
                <Link to="/about">Обо мне</Link>
                <Link to="/contacts">Контакты</Link>
                <Link to="/blog">Блог</Link>
            </nav>
        </header>
    )
})

export default memo(Header)
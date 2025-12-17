import { Link } from "react-router"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <Link to="/" className={styles.logo}>hanyo</Link>
            <nav>
                <Link href="/about">Обо мне</Link>
                <Link href="/contacts">Контакты</Link>
                <Link href="/blog">Блог</Link>
            </nav>
        </header>
    )
}

export default Header
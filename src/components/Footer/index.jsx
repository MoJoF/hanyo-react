import { Link } from "react-router"
import styles from "./Footer.module.css"
import { memo } from "react"

const Footer = memo(() => {
    return (
        <footer>
            <span>&copy;hanyo</span>
            <nav>
                <Link to="/policy">Политика конфиденциальности</Link>
                <Link to="/terms">Условия использования</Link>
            </nav>
        </footer>
    )
})

export default Footer
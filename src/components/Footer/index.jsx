import { Link } from "react-router"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <span>&copy;hanyo</span>
            <nav>
                <Link to="/policy">Политика конфиденциальности</Link>
                <Link to="/terms">Условия использования</Link>
            </nav>
        </footer>
    )
}

export default Footer
import { Link } from "react-router"
import styles from "./NotFound.module.css"


const NotFound = () => {
    return (
        <div className={styles.not_found_cont}>
            <h1>404</h1>
            <h2>Такая страница не найдена</h2>
            <Link to="/">Вернуться на главную</Link>
        </div>
    )
}


export default NotFound
import { memo } from "react"
import { Link } from "react-router"

const AdminHeader = memo(() => (
    <header>
        <nav>
            <Link to="posts">Посты</Link>
            <Link to="categories">Категории</Link>
            <Link to="users">Пользователи</Link>
        </nav>
    </header>
))

export default AdminHeader
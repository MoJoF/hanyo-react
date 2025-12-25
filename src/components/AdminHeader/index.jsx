import { memo } from "react"
import { Link } from "react-router"

const AdminHeader = memo(() => (
    <header>
        <nav>
            <Link to="/dashboard/posts">Посты</Link>
            <Link to="/dashboard/categories">Категории</Link>
            <Link to="/dashboard/users">Пользователи</Link>
        </nav>
    </header>
))

export default AdminHeader
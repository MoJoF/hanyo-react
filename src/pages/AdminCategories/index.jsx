import styles from "./AdminCategories.module.css"
import AdminHeader from "../../components/AdminHeader"
import Footer from "../../components/Footer"
import { useAllCategories } from "../../hooks/useAllCategories"
import { Link } from "react-router"

const AdminCategories = () => {
    const {data, isLoading, isError, error} = useAllCategories()

    if (isLoading) {
        return (
            <>
                <p>Загрузка данных...</p>
            </>
        )
    }

    if (isError) {
        return (
            <>
                <p>{error.message}</p>
            </>
        )
    }

    const categories = data.allRecords

    return (
        <>
            <div className={styles.admin_categories}>
            <h2>Категории</h2>
            {categories.map(cat => (
                <div key={cat.category_id} className={styles.admin_category}>
                    <h3>{cat.category_title}</h3>
                    <div className={styles.category_menu}>
                        <Link to={"/dashboard/change_category/" + cat.category_id}><small>Изменить</small></Link>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default AdminCategories
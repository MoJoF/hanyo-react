import styles from "./AdminCategories.module.css"
import { useAllCategories } from "../../hooks/useAllCategories"
import { Link } from "react-router"
import { useState } from "react"
import DeleteCategoryModal from "../../components/DeleteCategoryModal"

const AdminCategories = () => {
    const [currentCategoryId, setCurrentCategoryId] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const { data, isLoading, isError, error } = useAllCategories()

    if (isLoading) {
        return (<p>Загрузка данных...</p>)
    }

    if (isError) {
        return (<p>{error.message}</p>)
    }

    const categories = data.allRecords

    const deleteModal = (category_id) => {
        setCurrentCategoryId(category_id)
        setOpenModal(true)
    }

    return (
        <>
            <nav>
                <Link to="create_category">Создать категорию</Link>
            </nav>
            <div className={styles.admin_categories}>
                <h2>Категории</h2>
                {categories.map(cat => (
                    <div key={cat.category_id} className={styles.admin_category}>
                        <h3>{cat.category_title}</h3>
                        <div className={styles.category_menu}>
                            <Link to={"/dashboard/change_category/" + cat.category_id}><small>Изменить</small></Link>
                            <small className={styles.delete_category} onClick={() => deleteModal(cat.category_id)}>Удалить</small>
                        </div>
                    </div>
                ))}
            </div>
            { openModal && <DeleteCategoryModal category_id={currentCategoryId} onClose={() => setOpenModal(false)} /> }
        </>
    )
}

export default AdminCategories
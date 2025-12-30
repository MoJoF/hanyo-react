import styles from "./DeleteCategoryModal.module.css"
import { useDeleteCategory } from "../../hooks/useDeleteCategory"

const DeleteCategoryModal = ({ category_id, onClose }) => {
    const { mutate, isPending } = useDeleteCategory()

    const handleUpdate = () => {
        mutate({ category_id })
    }

    return (
        <div className={styles.delete_category_modal} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h2>Вы действительно хотите удалить категорию?</h2>
                <div className={styles.buttons}>
                    <button className={styles.yes_btn} onClick={handleUpdate}>Да</button>
                    <button className={styles.no_btn} onClick={onClose}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategoryModal
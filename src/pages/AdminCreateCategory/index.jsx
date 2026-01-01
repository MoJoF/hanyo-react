import styles from "./AdminCreateCategory.module.css"
import { useState } from "react"
import { useCreateCategory } from "../../hooks/useCreateCategory"
import ChangeParentCategory from "../../components/ChangeParentCategory"

const AdminCreateCategory = () => {
    const [categoryTitle, setCategoryTitle] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")
    const [categoryLink, setCategoryLink] = useState("")
    const [categoryParentId, setCategoryParentId] = useState("none")

    const { mutate, isPending } = useCreateCategory();

    const handleCreate = () => {
        const category_data = { 
            category_title: categoryTitle,
            category_description: categoryDescription,
            category_link: categoryLink,
            category_parent_id: categoryParentId
        }

        mutate(category_data)
    }

    return (
        <>
            <div className={styles.admin_category_block}>
                <div className={styles.edit_category_block}>
                    <label>Название категории:</label>
                    <input type="text" defaultValue={categoryTitle} onChange={e => setCategoryTitle(e.target.value)} />
                </div>
                <div className={styles.edit_category_block}>
                    <label>Описание категории:</label>
                    <textarea rows={20} cols={100} defaultValue={categoryDescription} onChange={e => setCategoryDescription(e.target.value)}></textarea>
                </div>
                <div className={styles.edit_category_block}>
                    <label>Ссылка на категорию:</label>
                    <input type="text" defaultValue={categoryLink} onChange={e => setCategoryLink(e.target.value)} />
                </div>
                <div className={styles.edit_category_block}>
                    <label>Родительская категория:</label>
                    <ChangeParentCategory categoryParentId={categoryParentId} setCategoryParentId={setCategoryParentId} />
                </div>

                <button className={styles.save_category} onClick={handleCreate}>Создать</button>
            </div>
        </>
    )
}

export default AdminCreateCategory
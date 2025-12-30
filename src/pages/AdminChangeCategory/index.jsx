import styles from "./AdminChangeCategory.module.css"
import { useParams } from "react-router"
import { useGetCategory } from "../../hooks/useGetCategory"
import { useState, useEffect } from "react"
import ChangeParentCategory from "../../components/ChangeParentCategory"

const AdminChangeCategory = () => {
    const { category_id } = useParams()

    const [categoryTitle, setCategoryTitle] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")
    const [categoryLink, setCategoryLink] = useState("")
    const [categoryParentId, setCategoryParentId] = useState("")

    const { data, isLoading, isError, error } = useGetCategory(category_id)

    useEffect(() => {
        if (data?.category) {
            const category = data.category
            setCategoryTitle(category.category_title)
            setCategoryDescription(category.category_description)
            setCategoryLink(category.category_link)
            setCategoryParentId(category.category_parent_id)
        }
    }, [data])

    if (isLoading) {
        return (
            <>
                <p>Загрука данных о категории...</p>
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

    return (
        <>
            <div className={styles.admin_category_block}>
                <div className={styles.edit_category_block}>
                    <label>Название категории:</label>
                    <input type="text" defaultValue={categoryTitle} onChange={e => setCategoryTitle(e.target.value)} />
                </div>
                <div className={styles.edit_category_block}>
                    <label>Описание категории:</label>
                    <textarea defaultValue={categoryDescription} onChange={e => setCategoryDescription(e.target.value)}></textarea>
                </div>
                <div className={styles.edit_category_block}>
                    <label>Ссылка на категорию:</label>
                    <input type="text" defaultValue={categoryLink} onChange={e => setCategoryLink(e.target.value)} />
                </div>
                <div className={styles.edit_category_block}>
                    <label>Родительская категория:</label>
                    <ChangeParentCategory category_id={category_id} setCategoryParentId={setCategoryParentId} />
                </div>

                <button className={styles.save_category}>Сохранить</button>
            </div>
        </>
    )
}

export default AdminChangeCategory
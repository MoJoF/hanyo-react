import styles from "./AdminChangeCategory.module.css"
import AdminHeader from "../../components/AdminHeader"
import Footer from "../../components/Footer"
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
                <AdminHeader />
                <p>Загрука данных о категории...</p>
                <Footer />
            </>
        )
    }

    if (isError) {
        return (
            <>
                <AdminHeader />
                <p>{error.message}</p>
                <Footer />
            </>
        )
    }

    return (
        <>
            <AdminHeader />
            <div className={styles.admin_category_block}>
                <label>Название:
                    <input type="text" defaultValue={categoryTitle} onChange={e => setCategoryTitle(e.target.value)} />
                </label>
                <textarea defaultValue={categoryDescription} onChange={e => setCategoryDescription(e.target.value)}></textarea>
                <input type="text" defaultValue={categoryLink} onChange={e => setCategoryLink(e.target.value)} />
                <ChangeParentCategory category_id={category_id} setCategoryParentId={setCategoryParentId} />
            </div>
            <Footer />
        </>
    )
}

export default AdminChangeCategory
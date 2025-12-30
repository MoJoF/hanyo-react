import styles from "./RenderParentCategory.module.css"
import { useGetCategoryByLink } from "../../hooks/useGetCategoryByLink"
import Header from "../Header"
import { Link } from "react-router"

const RenderParentCategory = ({ link }) => {
    const { data, isLoading, isError, error } = useGetCategoryByLink(link)

    if (isLoading) {
        return (<p>Загрузка данных о категории...</p>)
    }

    if (isError) {
        return (<p>{error.message}</p>)
    }

    const parent_category = data.parent
    const children_categories = data.children

    return (
        <div className={styles.category_container}>
            <h1>{parent_category.category_title}</h1>
            {
                parent_category.category_description === "none"
                    ? ""
                    : (<p>{parent_category.category_description}</p>)
            }

            <div className={styles.children_categories_container}>
                <h1>Дочерние категории</h1>
                {children_categories.map(cat => (
                    <div key={cat.category_id}>
                        <h2>{cat.category_title}</h2>
                        <Link to={"/category/" + cat.category_link}>Перейти</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RenderParentCategory
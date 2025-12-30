import styles from "./RenderChildCategory.module.css"
import { useGetCategoryByLink } from "../../hooks/useGetCategoryByLink"
import CategoryPosts from "../../components/CategoryPosts"

const RenderChildCategory = ({ link }) => {
    const { data, isLoading, isError, error } = useGetCategoryByLink(link)

    if (isLoading) return (<p>Загрузка данных о категории...</p>)

    if (isError) return (<p>{error.message}</p>)

    const category = data.category

    return (
        <div className={styles.category_container}>
            <h1>{category.category_title}</h1>
            <p>{category.category_description}</p>

            <div className={styles.posts}>
                <CategoryPosts link={category.category_link} />
            </div>
        </div>
    )
}

export default RenderChildCategory
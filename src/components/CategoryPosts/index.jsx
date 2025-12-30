import styles from "./CategoryPosts.module.css"
import { useGetPostsByCategoryLink } from "../../hooks/useGetPostsByCategoryLink"

const CategoryPosts = ({ link }) => {
    const { data, isLoading, isError, error } = useGetPostsByCategoryLink(link)

    if (isLoading) return (<p>Загрузка постов</p>)

    if (isError) return (<p>{error.message}</p>)

    const posts = data.posts

    console.log(posts)

    return (
        <div className={styles.category_posts}>
            
        </div>
    )
}

export default CategoryPosts
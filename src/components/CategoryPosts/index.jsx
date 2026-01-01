import styles from "./CategoryPosts.module.css"
import { useGetPostsByCategoryLink } from "../../hooks/useGetPostsByCategoryLink"
import { Link } from "react-router"

const CategoryPosts = ({ link }) => {
    const { data, isLoading, isError, error } = useGetPostsByCategoryLink(link)

    if (isLoading) return (<p>Загрузка постов</p>)

    if (isError) return (<p>{error.message}</p>)

    const posts = data.posts

    return (
        <div className={styles.category_posts}>
            <hr />
            {posts.map(post => (
                <div key={post.post_id} className={styles.category_post}>
                    <h2>{post.post_title}</h2>
                    <Link to={"/post/" + post.post_id}>Читать</Link>
                </div>
            ))}
        </div>
    )
}

export default CategoryPosts
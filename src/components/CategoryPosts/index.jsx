import styles from "./CategoryPosts.module.css"
import { useGetPostsByCategoryLink } from "../../hooks/useGetPostsByCategoryLink"
import { Link } from "react-router"

const CategoryPosts = ({ link }) => {
    const { data, isLoading, isError, error } = useGetPostsByCategoryLink(link)

    if (isLoading) return (<p>Загрузка постов</p>)

    if (isError) return (<p>{error.message}</p>)

    const posts = data.posts

    const postPreview = (html, words = 20) => {
        const div = document.createElement("div")
        div.innerHTML = html

        const text = div.textContent || div.innerText || ""

        const split = text.trim().split(/\s+/)

        if (split.length <= words) return text

        return split.slice(0, words).join(" ") + "…"
    }

    return (
        <div className={styles.category_posts}>
            <hr />
            {posts.map(post => (
                <div key={post.post_id} className={styles.category_post}>
                    <h2>{post.post_title}</h2>
                    <p>{postPreview(post.post_html)}</p>
                    <Link to={"/post/" + post.post_id}>Читать</Link>
                </div>
            ))}
        </div>
    )
}

export default CategoryPosts
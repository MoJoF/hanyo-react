import styles from "./BlogPosts.module.css"
import { useGetCategoryByLink } from "../../hooks/useGetCategoryByLink"
import { Link } from "react-router"

const BlogPosts = ({ category_link }) => {
    const { data, isLoading, isError, error } = useGetCategoryByLink(category_link)

    if (isLoading) return (<p>Загрузка постов....</p>)

    if (isError) return (<p>{error.message}</p>)

    const postPreview = (html, words = 10) => {
        const div = document.createElement("div")
        div.innerHTML = html

        const text = div.textContent || div.innerText || ""

        const split = text.trim().split(/\s+/)

        if (split.length <= words) return text

        return split.slice(0, words).join(" ") + "…"
    }

    return (
        <div className={styles.blog_posts}>
            { data?.posts?.map(post => (
                <div className={styles.blog_post}>
                    <h2>{post.post_title}</h2>
                    <p>{postPreview(post.post_html)}</p>
                    <Link to={"/post/" + post.post_id}>Читать полностью</Link>
                </div>
            )) }
        </div>
    )
}

export default BlogPosts
import styles from "./HomePagePosts.module.css"
import { useGetLimitedPosts } from "../../hooks/useGetLimitedPosts"
import { Link } from "react-router"


const HomePagePosts = () => {
    const { data, isLoading, isError, error } = useGetLimitedPosts(10)
    if (isLoading) return (<p>Загрузка постов</p>)
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
        <div className={styles.home_page_posts}>
            <h2>Недавнее</h2>
            <div className={styles.posts}>
                {data.posts.map(post => (
                    <div className={styles.post} key={post.post_id}>
                        <Link to={"/post/" + post.post_id} className={styles.post__header}>
                            {post.post_title}
                        </Link>
                        <Link to={"/category/" + post.category_link} className={styles.post__category}>
                            {post.category_title}
                        </Link>
                        <p>{postPreview(post.post_html)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePagePosts
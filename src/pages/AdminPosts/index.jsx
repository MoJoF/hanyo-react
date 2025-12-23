import AdminHeader from "../../components/AdminHeader"
import Footer from "../../components/Footer"
import { Link } from "react-router"
import { useAllPostsForAdmin } from "../../hooks/useAllPostsForAdmin"
import styles from "./AdminPosts.module.css"

const AdminPosts = () => {
    const { data, isLoading, isError, error } = useAllPostsForAdmin()

    if (isLoading) return <h2>Загрузка постов</h2>

    if (isError) return <p>{error.message}</p>

    return (
        <>
            <AdminHeader />
            <nav>
                <Link to="create-post">Создать пост</Link>
                <Link to="drafts">Черновики</Link>
            </nav>
            <div className={styles.posts}>

                {data.posts.map(post => (
                    <div className={styles.post}>
                        <Link to={"edit_post?id=" + post.post_id}>{post.post_title}</Link>
                        {post.post_draft ? <small>Черновик</small> : ""}
                    </div>
                ))}

            </div>
            <Footer />
        </>
    )
}

export default AdminPosts
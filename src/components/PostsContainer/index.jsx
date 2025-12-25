import styles from "./PostsContainer.module.css"
import { Link } from "react-router"


const PostsContainer = ({ posts }) => {
    return (
        <div className={styles.admin_posts}>
            {posts.map(post => (
                <div className={styles.admin_post} key={post.post_id}>
                    <Link to={"/dashboard/posts/edit_post?id=" + post.post_id}>{post.post_title}</Link>
                    <div className={styles.admin_bottom_post}>
                        <Link to="/dashboard/categories/translates" className={styles.admin_category_post}>
                            Переводы
                        </Link>
                        {post.post_draft ? <small>Черновик</small> : ""}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostsContainer
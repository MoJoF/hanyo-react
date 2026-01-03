import styles from "./PostsContainer.module.css"
import { Link } from "react-router"
import { useDeletePost } from "../../hooks/useDeletePost"


const PostsContainer = ({ posts }) => {
    const { mutate, isPending } = useDeletePost()

    const deletePost = (post_id) => {
        mutate(post_id)
    }

    return (
        <div className={styles.admin_posts}>
            {posts.map(post => (
                <div className={styles.admin_post} key={post.post_id}>
                    <Link to={"/dashboard/posts/edit_post/" + post.post_id}>{post.post_title}</Link>
                    <div className={styles.admin_bottom_post}>
                        <Link to={"/dashboard/categories/change_category/" + post.category_id} className={styles.admin_category_post}>
                            {post.category_title}
                        </Link>
                        {post.post_draft ? <small>Черновик</small> : ""}
                        <button className={styles.post_remove_button} onClick={() => deletePost(post.post_id)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostsContainer
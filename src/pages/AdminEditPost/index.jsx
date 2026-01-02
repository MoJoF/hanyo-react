import { useParams } from "react-router"
import styles from "./AdminEditPost.module.css"
import Editor from "../../components/Editor"
import { useGetPost } from "../../hooks/useGetPost"

const AdminEditPost = () => {
    const { post_id } = useParams()

    const { data, isLoading, isError, error } = useGetPost(post_id)

    if (isLoading) return (<p>Загрузка данных поста...</p>)

    if (isError) return (<p>{error.message}</p>)

    const post = data.post

    return (
        <div className={styles.admin_edit_post}>
            <Editor html={post.post_html} />
        </div>
    )
}

export default AdminEditPost
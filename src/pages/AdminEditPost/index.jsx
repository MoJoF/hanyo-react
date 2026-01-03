import { useParams } from "react-router"
import styles from "./AdminEditPost.module.css"
import Editor from "../../components/Editor"
import ListCategoriesCheckboxes from "../../components/ListCategoriesCheckboxes"
import PublishPostButton from "../../components/PublishPostButton"
import { useGetPostAdmin } from "../../hooks/useGetPostAdmin"
import { useState, useEffect } from "react"
import { useEditPost } from "../../hooks/useEditPost"

const AdminEditPost = () => {
    const { post_id } = useParams()

    const [categoryId, setCategoryId] = useState(0)
    const [html, setHtml] = useState("")
    const [header, setHeader] = useState("")
    const [isDraft, setIsDraft] = useState(false)

    const { data, isLoading, isError, error } = useGetPostAdmin(post_id)

    const { mutate, isPending } = useEditPost()

    useEffect(() => {
        if (data?.post) {
            setCategoryId(data.post.category_id)
            setHeader(data.post.post_title)
            setHtml(data.post.post_html)
            setIsDraft(data.post.post_draft)
        }
    }, [data])

    if (isLoading) return (<p>Загрузка данных поста...</p>)

    if (isError) return (<p>{error.message}</p>)

    const savePost = () => {
        mutate({
            post_id,
            post_title: header,
            post_html: html,
            post_draft: isDraft,
            category_id: categoryId
        })
    }

    return (
        <div className={styles.admin_create_post}>
            <nav>
                <button onClick={() => savePost()}>Сохранить</button>
                {isDraft ? <PublishPostButton post_id={post_id} category_id={categoryId} post_title={header} post_html={html} post_draft={0} /> : ""}
            </nav>
            <input className={styles.write_header}
                type="text"
                defaultValue={header}
                onChange={e => setHeader(e.target.value)}
                placeholder="Заголовок" />
            <div className={styles.write_new_post}>
                <Editor html={html} setHtml={setHtml} />
                <ListCategoriesCheckboxes categoryId={categoryId} setCategoryId={setCategoryId} />
            </div>
        </div>
    )
}

export default AdminEditPost
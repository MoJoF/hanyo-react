import styles from "./AdminCreatePost.module.css"
import Editor from "../../components/Editor"
import ListCategoriesCheckboxes from "../../components/ListCategoriesCheckboxes"
import { useState } from "react"
import SaveDraftForNewPost from "../../components/SaveDraftForNewPost"


const AdminCreatePost = () => {
    const [categoryId, setCategoryId] = useState(0)
    const [html, setHtml] = useState("")
    const [header, setHeader] = useState("")

    const publish = () => {
        
    }

    return (
        <div className={styles.admin_create_post}>
            <nav>
                <SaveDraftForNewPost post_title={header} post_html={html} category_id={categoryId} />
                <button>Опубликовать</button>
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

export default AdminCreatePost
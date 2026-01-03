import styles from "./PublishPostButton.module.css"
import { useEditPost } from "../../hooks/useEditPost"


const PublishPostButton = ({ post_id, post_title, post_html, post_draft, category_id }) => {
    const { mutate, isPending } = useEditPost()

    const publish = () => {
        mutate({
            post_id,
            post_title,
            post_html,
            post_draft,
            category_id
        })
    }

    return (
        <button onClick={publish}>Опубликовать</button>
    )
}

export default PublishPostButton
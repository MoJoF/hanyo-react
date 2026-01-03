import styles from "./SaveDraftForNewPost.module.css"
import { useCreatePost } from "../../hooks/useCreatePost"

const SaveDraftForNewPost = ({ post_title, post_html, category_id }) => {
    const { mutate, isPending } = useCreatePost();

    const saveDraft = () => {
        mutate({ post_title, post_html, category_id })
    }

    return (<button onClick={saveDraft}>Сохранить черновик</button>)
}

export default SaveDraftForNewPost
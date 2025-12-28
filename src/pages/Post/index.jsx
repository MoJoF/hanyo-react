import styles from "./Post.module.css"
import { useParams, Link } from "react-router"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useGetPost } from "../../hooks/useGetPost"

const Post = () => {
    const { post_id } = useParams();
    const { data, isLoading, isError, error } = useGetPost(post_id)

    if (isLoading) {
        return (
            <>
                <Header />
                <p>Загрузка поста</p>
                <Footer />
            </>
        )
    }

    if (isError) {
        return (
            <>
                <Header />
                <p>{error.message}</p>
                <Footer />
            </>
        )
    }

    const post = data.post

    return (
        <>
            <Header />
            <Link to={"/category/" + post.category_link}>{post.category_title}</Link>
            <div className={styles.post_container}>
                <h1>{post.post_title}</h1>
                <div className={styles.post__content} dangerouslySetInnerHTML={{ __html: post.post_html }}></div>
            </div>
            <Footer />
        </>
    )
}

export default Post
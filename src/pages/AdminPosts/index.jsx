import PostsContainer from "../../components/PostsContainer"
import { Link } from "react-router"
import { useAllPostsForAdmin } from "../../hooks/useAllPostsForAdmin"


const AdminPosts = () => {
    const { data, isLoading, isError, error } = useAllPostsForAdmin()

    if (isLoading) return (
        <>
            <h2>Загрузка постов</h2>
        </>
    )

    if (isError) return <p>{error.message}</p>

    return (
        <>
            <nav>
                <Link to="create-post">Создать пост</Link>
                <Link to="drafts">Черновики</Link>
            </nav>
            <PostsContainer posts={data.posts} />
        </>
    )
}

export default AdminPosts
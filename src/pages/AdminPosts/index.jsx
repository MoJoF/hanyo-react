import AdminHeader from "../../components/AdminHeader"
import Footer from "../../components/Footer"
import PostsContainer from "../../components/PostsContainer"
import { Link } from "react-router"
import { useAllPostsForAdmin } from "../../hooks/useAllPostsForAdmin"


const AdminPosts = () => {
    const { data, isLoading, isError, error } = useAllPostsForAdmin()

    if (isLoading) return (
        <>
            <AdminHeader />
            <h2>Загрузка постов</h2>
            <Footer />
        </>
    )

    if (isError) return <p>{error.message}</p>

    return (
        <>
            <AdminHeader />
            <nav>
                <Link to="create-post">Создать пост</Link>
                <Link to="drafts">Черновики</Link>
            </nav>
            <PostsContainer posts={data.posts} />
            <Footer />
        </>
    )
}

export default AdminPosts
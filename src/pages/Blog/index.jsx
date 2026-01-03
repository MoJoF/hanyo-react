import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Blog.module.css"
import { useGetCategory } from "../../hooks/useGetCategory"
import BlogPosts from "../../components/BlogPosts"

const Blog = () => {
    const { data, isLoading, isError, error } = useGetCategory(5)

    if (isLoading) return (
        <>
            <Header />
            <p>Загрузка постов блога</p>
            <Footer />
        </>
    )

    if (isError) return (
        <>
            <Header />
            <p>{error.message}</p>
            <Footer />
        </>
    )

    const category = data.category

    return (
        <>
            <Header />
            <div className={styles.blog_container}>
                <h1>{category.category_title}</h1>
                <BlogPosts category_link={category.category_link} />
            </div>
            <Footer />
        </>
    )
}

export default Blog
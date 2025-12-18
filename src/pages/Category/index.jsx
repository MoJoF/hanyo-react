import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom";
import { useGetCategoryByLink } from "../../hooks/useGetCategoryByLink";

const Category = () => {
    const { link } = useParams()
    const { data, isLoading, isError, error } = useGetCategoryByLink(link)

    if (isLoading) return <p>Загрузка информации о категории.</p>

    if (isError) return <p>{error.message}</p>

    return (
        <>
            <Header />
            {data.type === "child" ?
                (<h1>Загружена дочерняя категория</h1>) :
                (<h1>Загружена родительская категория</h1>)}
            <Footer />
        </>
    )
}

export default Category
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useGetCategoryByLink } from "../../hooks/useGetCategoryByLink";
import RenderChildCategory from "../../components/RenderChildCategory";

const Category = () => {
    const { link } = useParams()
    const { data, isLoading, isError, error } = useGetCategoryByLink(link)

    if (isLoading) return <p>Загрузка информации о категории.</p>

    if (isError) return <p>{error.message}</p>

    return (
        <>
            <Header />
            {data.type === "child" ?
                (<RenderChildCategory
                    title={data.category.category_title}
                    description={data.category.category_description}
                    id={data.category.category_id}
                />) :
                (<h1>Загружена родительская категория</h1>)}
            <Footer />
        </>
    )
}

export default Category
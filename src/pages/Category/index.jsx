import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useGetCategoryByLink } from "../../hooks/useGetCategoryByLink";
import RenderChildCategory from "../../components/RenderChildCategory";
import RenderParentCategory from "../../components/RenderParentCategory";

const Category = () => {
    const { link } = useParams()
    const { data, isLoading, isError, error } = useGetCategoryByLink(link)

    if (isLoading) return <p>Загрузка информации о категории.</p>

    if (isError) return <p>{error.message}</p>

    return (
        <>
            <Header />
            {data.type === "child" ?
                (<RenderChildCategory link={link} />) :
                (<RenderParentCategory link={link} />)}
            <Footer />
        </>
    )
}

export default Category
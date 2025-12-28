import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HomePageCategories from "../../components/HomePageCategories"
import HomePagePosts from "../../components/HomePagePosts"

const Home = () => {
    return (
        <>
            <Header />
            <HomePageCategories />
            <HomePagePosts />
            <Footer />
        </>
    )
}

export default Home
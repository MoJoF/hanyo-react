import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Policy from "./pages/Policy"
import Terms from "./pages/Terms"
import Category from "./pages/Category"
import Post from "./pages/Post"

import Admin from "./pages/Admin"
import Dashboard from "./pages/Dashboard"
import DashboardHome from "./pages/DashboardHome"
import AdminPosts from "./pages/AdminPosts"
import AdminCategories from "./pages/AdminCategories"
import AdminChangeCategory from "./pages/AdminChangeCategory"
import AdminCreateCategory from "./pages/AdminCreateCategory"
import AdminEditPost from "./pages/AdminEditPost"


const Router = () => {
    return (
        <Routes>
            {/* Админ часть */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="posts" element={<AdminPosts />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="change_category/:category_id" element={<AdminChangeCategory />} />
                <Route path="categories/create_category/" element={<AdminCreateCategory />} />
                <Route path="posts/edit_post/:post_id" element={<AdminEditPost />} />
            </Route>

            {/* Клиентская часть */}
            <Route path="/" element={<Home />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/category/:link" element={<Category />} />
            <Route path="/post/:post_id" element={<Post />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router
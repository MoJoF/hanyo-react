import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Policy from "./pages/Policy"
import Terms from "./pages/Terms"
import Category from "./pages/Category"
import Post from "./pages/Post"

import Admin from "./pages/Admin"
import Dashboard from "./pages/Dashboard"
import AdminPosts from "./pages/AdminPosts"
import AdminCategories from "./pages/AdminCategories"
import AdminChangeCategory from "./pages/AdminChangeCategory"

const Router = () => {
    return (
        <Routes>
            {/* Админ часть */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/posts" element={<AdminPosts />} />
            <Route path="/dashboard/categories" element={<AdminCategories />} />
            <Route path="/dashboard/change_category/:category_id" element={<AdminChangeCategory />} />

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
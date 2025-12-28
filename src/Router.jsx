import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Policy from "./pages/Policy"
import Terms from "./pages/Terms"
import Category from "./pages/Category"
import Admin from "./pages/Admin"
import Dashboard from "./pages/Dashboard"
import AdminPosts from "./pages/AdminPosts"

const Router = () => {
    return (
        <Routes>
            {/* Админ часть */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/posts" element={<AdminPosts />} />

            {/* Клиентская часть */}
            <Route path="/" element={<Home />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/category/:link" element={<Category />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router
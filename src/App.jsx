import { Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Policy from "./pages/Policy"
import Terms from "./pages/Terms"
import Category from "./pages/Category"
import Admin from "./pages/Admin"
import Dashboard from "./pages/Dashboard"


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Админ часть */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Клиентская часть */}
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/category/:link" element={<Category />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

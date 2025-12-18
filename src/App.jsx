import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Policy from "./pages/Policy"
import Terms from "./pages/Terms"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/terms" element={<Terms />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

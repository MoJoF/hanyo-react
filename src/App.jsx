import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RecoilRoot } from "recoil"
import { useAllCategories } from "./hooks/useAllCategories"
import Router from "./Router"


function App() {
  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App

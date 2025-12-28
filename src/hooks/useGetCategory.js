import { useQuery } from "@tanstack/react-query"

async function get_category(category_id) {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "get_category", category_id })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категории")

    return res.json()
}

export function useGetCategory(category_id) {
    return useQuery({
        queryKey: ["get_category", category_id],
        queryFn: () => get_category(category_id),
        staleTime: 60_000
    })
}
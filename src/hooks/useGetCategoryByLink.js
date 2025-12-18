import { useQuery } from "@tanstack/react-query"

async function get_category_by_link(link) {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "get_category_by_link", link })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категории")

    return res.json()
}

export function useGetCategoryByLink(link) {
    return useQuery({
        queryKey: ["get_category_by_link", link],
        queryFn: () => get_category_by_link(link),
        staleTime: 60_000
    })
}
import { useQuery } from "@tanstack/react-query"

async function get_posts_by_category_link(category_link) {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "get_posts_by_category_link", category_link })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категории")

    return res.json()
}

export function useGetPostsByCategoryLink(category_link) {
    return useQuery({
        queryKey: ["get_posts_by_category_link", category_link],
        queryFn: () => get_posts_by_category_link(category_link),
        staleTime: 60_000
    })
}
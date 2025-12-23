import { useQuery } from "@tanstack/react-query"

async function get_all_posts_for_admin() {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "get_category_posts_with_drafts" })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категории")

    return res.json()
}

export function useAllPostsForAdmin() {
    return useQuery({
        queryKey: ["get_all_posts_for_admin"],
        queryFn: () => get_all_posts_for_admin(),
        staleTime: 60_000
    })
}
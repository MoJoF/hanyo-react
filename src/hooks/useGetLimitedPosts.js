import { useQuery } from "@tanstack/react-query"

async function get_limit_posts(limit) {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "get_limit_posts", limit })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категории")

    return res.json()
}

export function useGetLimitedPosts(limit) {
    return useQuery({
        queryKey: ["get_limit_posts", limit],
        queryFn: () => get_limit_posts(limit),
        staleTime: 60_000
    })
}
import { useQuery } from "@tanstack/react-query"

async function get_post(post_id) {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "get_post", post_id })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категории")

    return res.json()
}

export function useGetPost(post_id) {
    return useQuery({
        queryKey: ["get_post", post_id],
        queryFn: () => get_post(post_id),
        staleTime: 60_000
    })
}
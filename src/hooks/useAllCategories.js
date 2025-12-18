import { useQuery } from "@tanstack/react-query"

async function all_categories() {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "all_categories" })
    })

    if (!res.ok) throw new Error("Ошибка загрузки категорий")

    return res.json()
}

export function useAllCategories() {
    return useQuery({
        queryKey: ["all_categories"],
        queryFn: all_categories,
        staleTime: 60_000
    })
}
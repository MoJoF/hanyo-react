import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async (post) => {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create_post", ...post })
    });

    if (!res.ok) {
        throw new Error("Ошибка при создании категории");
    }

    return res.json();
}

export function useCreatePost() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] })
            alert("Пост успешно добавлен в черновик")
            location.href = "/dashboard/posts"
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`)
        },
    })
}
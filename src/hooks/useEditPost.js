import { useMutation, useQueryClient } from "@tanstack/react-query";

const editPost = async (post) => {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "edit_post", ...post })
    });

    if (!res.ok) {
        throw new Error("Ошибка при создании категории");
    }

    return res.json();
}

export function useEditPost() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: editPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] })
            alert("Пост успешно изменён.")
            location.href = "/dashboard/posts"
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`)
        },
    })
}
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deletePost = async (post_id) => {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_post", post_id })
    });

    if (!res.ok) {
        throw new Error("Ошибка при обновлении данных категории");
    }

    return res.json();
}

export function useDeletePost() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] })
            alert("Пост успешно удалён")
            location.reload()
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`)
        },
    })
}
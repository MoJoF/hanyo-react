import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteCategory = async (category_id) => {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_category", ...category_id })
    });

    if (!res.ok) {
        throw new Error("Ошибка при обновлении данных категории");
    }

    return res.json();
}

export function useDeleteCategory() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
            location.reload()
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`)
        },
    })
}
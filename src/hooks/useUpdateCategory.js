import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateCategory = async (category) => {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({action:"edit_category", ...category})
    });

    if (!res.ok) {
        throw new Error("Ошибка при обновлении данных категории");
    }

    return res.json();
}

export function useUpdateCategory() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
            alert("Данные успешно обновлены")
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`)
        },
    })
}
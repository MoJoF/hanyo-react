import { useMutation, useQueryClient } from "@tanstack/react-query";

const createCategory = async (category) => {
    const res = await fetch("https://hanyo-writes.omyraucy.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "write_category", ...category })
    });

    if (!res.ok) {
        throw new Error("Ошибка при создании категории");
    }

    return res.json();
}

export function useCreateCategory() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
            alert("Категория успешно создана")
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`)
        },
    })
}
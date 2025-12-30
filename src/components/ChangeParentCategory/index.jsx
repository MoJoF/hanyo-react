import { useAllCategories } from "../../hooks/useAllCategories"
import styles from "./ChangeParentCategory.module.css"

const ChangeParentCategory = ({ category_id, setCategoryParentId }) => {
    const { data, isLoading, isError, error } = useAllCategories()

    if (isLoading) return <p>Загрузка...</p>
    if (isError) return <p>{error.message}</p>

    const allCategories = data.allRecords

    const currentCategory = allCategories.find(
        c => c.category_id == category_id
    )

    if (!currentCategory) return null

    const categories = allCategories.filter(
        c => c.category_id !== category_id
    )

    const handleChange = (e) => {
        setCategoryParentId(e.target.value)
    }

    return (
        <select
            value={String(currentCategory.category_parent_id)}
            onChange={handleChange}
        >
            <option value="none">none</option>

            {categories.map(category => (
                <option
                    key={category.category_id}
                    value={category.category_id}
                >
                    {category.category_title}
                </option>
            ))}
        </select>
    )
}

export default ChangeParentCategory

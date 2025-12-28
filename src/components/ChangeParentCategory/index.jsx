import { useAllCategories } from "../../hooks/useAllCategories"


const ChangeParentCategory = ({ category_id, setCategoryParentId }) => {
    const { data, isLoading, isError, error } = useAllCategories()

    if (isLoading) return (<p>Загрузка...</p>)

    if (isError) return (<p>{error.message}</p>)

    const categories = data.allRecords.filter(cat => cat.category_id != category_id)

    const changePId = (e) => {
        const option = e.target.selectedOptions[0]
        const id = option.dataset.id
        setCategoryParentId(id)
    }

    return (
        <select onChange={e => changePId(e)}>
            {categories.map(categoryObj => (
                <option key={categoryObj.category_id} data-id={categoryObj.category_id} value={categoryObj.category_title}>{categoryObj.category_title}</option>
            ))}
        </select>
    )
}

export default ChangeParentCategory
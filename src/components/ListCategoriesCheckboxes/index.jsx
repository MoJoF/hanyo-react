import styles from "./ListCategoriesCheckboxes.module.css"
import { useAllCategories } from "../../hooks/useAllCategories"


const ListCategoriesCheckboxes = ({ categoryId, setCategoryId }) => {
    const { data, isLoading, isError, error } = useAllCategories()

    if (isLoading) return (<p>Загрузка списка категорий...</p>)

    if (isError) return (<p>{error.message}</p>)

    const categories = data.allRecords

    const parents = categories.filter(cat => cat.category_parent_id === "none" || !cat.category_parent_id)

    const toggleSelected = (c_id) => {
        setCategoryId(c_id)
    }

    const getChildrenCategory = (parent_id) => {
        return categories
            .filter(category => category.category_parent_id === parent_id)
            .map(el => (
                <div key={el.category_id} onClick={() => toggleSelected(el.category_id)}>
                    {categoryId === el.category_id ?
                        <div className={styles.category_selected_input}>
                            <span><i>{el.category_title}</i></span>
                        </div> :
                        <div className={styles.category_input}>
                            <span>{el.category_title}</span>
                        </div>
                    }
                </div>
            ))
    }

    return (
        <aside>
            {parents.map(parent => (
                <div key={parent.category_id}>
                    {categoryId === parent.category_id ?
                        <div className={styles.category_selected_input} onClick={() => toggleSelected(parent.category_id)}>
                            <span><i>{parent.category_title}</i></span>
                        </div> :
                        <div className={styles.category_input} onClick={() => toggleSelected(parent.category_id)}>
                            <span>{parent.category_title}</span>
                        </div>
                    }
                    {getChildrenCategory(parent.category_id)}
                </div>
            ))}
        </aside>
    )
}

export default ListCategoriesCheckboxes
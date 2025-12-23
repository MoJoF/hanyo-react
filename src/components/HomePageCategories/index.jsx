import styles from "./HomePageCategories.module.css"
import { useAllCategories } from "../../hooks/useAllCategories"
import { Link } from "react-router"
import { useMemo } from "react"

const HomePageCategories = () => {
    const { data, isLoading, isError, error } = useAllCategories()

    const categories = useMemo(() => {
        if (!data?.allRecords) return []

        return data.allRecords.filter(
            c => c.category_title !== "Блог"
        )
    }, [data])

    const grouped = useMemo(() => {
        return Object.groupBy(
            categories,
            c => c.category_parent_id ?? "none"
        )
    }, [categories])

    if (isLoading) return <p>Загрузка категорий…</p>
    if (isError) return <p>{error.message}</p>

    const parents = grouped["none"] ?? []

    return (
        <section className={styles.home_page}>
            <h2>Список разделов</h2>

            <div className={styles.sections}>
                {parents.map(parent => (
                    <div
                        key={parent.category_id}
                        className={styles.block}
                    >
                        <h3>
                            <Link to={`/category/${parent.category_link}`}>
                                {parent.category_title}
                            </Link>
                        </h3>

                        {grouped[parent.category_id]?.length > 0 && (
                            <div className={styles.list_links}>
                                {grouped[parent.category_id].map(child => (
                                    <Link
                                        key={child.category_id}
                                        to={`/category/${child.category_link}`}
                                    >
                                        {child.category_title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomePageCategories

import styles from "./RenderChildCategory.module.css"

const RenderChildCategory = ({ title, description, id }) => {
    return (
        <div className={styles.category_container}>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className={styles.posts}>
                Пока что тут нет постов. Наберитесь терпения.
            </div>
        </div>
    )
}

export default RenderChildCategory
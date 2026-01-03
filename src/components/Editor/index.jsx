import styles from "./Editor.module.css"
import { useRef } from "react"

const Editor = ({ html, setHtml }) => {
    const editorRef = useRef(null)

    const handlePaste = async (e) => {
        const items = e.clipbloadData?.items
        if (!items) return

        for (const item of items) {
            if (item.type.startsWith("image/")) {
                e.preventDefault()
                const file = item.getAsFile()
                if (!file) return

                const formData = new FormData()
                formData.append("file", file, file.name || "pasted.png")

                const resp = await fetch("https://hanyo-writes.omyraucy.workers.dev", {
                    method: "POST",
                    body: formData
                })

                const data = await resp.json()
                const imageUrl = data.url

                insertImage(imageUrl)
            }
        }
    }

    const insertImage = (url) => {
        const editor = editorRef.current
        editor.focus()

        document.execCommand(
            "insertHTML",
            false,
            `<img class="pasted" src=${url}>`
        )
    }

    const changeContent = () => {
        const h = editorRef.current.innerHTML
        setHtml(h)
    }

    return (
        <div className={styles.editor_container}>
            {/* <button>Загрузить файлы</button> */}
            <div className={styles.post_editor}
                ref={editorRef}
                contentEditable
                onPaste={handlePaste}
                onChange={() => changeContent()}
                dangerouslySetInnerHTML={{ __html: html }}>
            </div>
        </div>
    )
}

export default Editor
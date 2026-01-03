import styles from "./Contacts.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Contacts = () => {
    return (
        <>
            <Header />
            <div className={styles.contacts_block}>
                <h1>Контакты</h1>
                <div><span>Связаться со мной (по вопросам рекламы тоже): <a href="mailto:flybuk@icloud.com">flybuk@icloud.com</a></span></div>
            </div>
            <Footer />
        </>
    )
}

export default Contacts
import styles from "./About.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const About = () => {
    return (
        <>
            <Header />
            <div className={styles.about_cont}>
                <h1>Обо мне</h1>
                <p>👋 Привет. Добро пожаловать на сайт. Меня зовут hanyo и эта моя страничка в интернете.</p>
                <p><i>Что здесь можно найти?</i></p>

                <div className={styles.about_blocks}>
                    <div className={styles.about_block}>
                        <h2>Переводы</h2>
                        <p>Манга, новеллы, ранобэ – я берусь за разные тайтлы</p>
                        <hr />
                    </div>
                    <div className={styles.about_block}>
                        <h2>Авторские новеллы</h2>
                        <p>Я пишу новеллы и ранобэ разных жанров.</p>
                        <hr />
                    </div>
                    <div className={styles.about_block}>
                        <h2>Предложи своё</h2>
                        <p>Ты можешь написать мне в <a href="/suspend">предложку</a> и скинуть, перевод которого хотел бы увидеть на сайте.</p>
                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
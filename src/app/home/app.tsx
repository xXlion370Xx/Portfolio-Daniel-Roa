import Experience from "../components/experience/experience";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import styles from "./app.module.css";

export default function App() {
    return (
        <main className={styles.main}>
            <section className={styles.sectionPrincipal}>
                <Nav></Nav>
                <Header></Header>
            </section>
            <section className={styles.experience}>
                <Experience></Experience>
            </section>
        </main>
    )
}
import styles from './nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>Experience</li>
                <li>Projects</li>
                <li>About me</li>
                <li>Technologies</li>
            </ul>
        </nav>
    )
}
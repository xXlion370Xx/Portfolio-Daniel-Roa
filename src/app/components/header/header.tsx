import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Daniel Roa</h1>
            <div className="photo-placeholder">
                {/* Aquí podrías agregar la foto */}
                <div className={styles.photoContainer}>
                    <img className={styles.mainPhoto} src="/imgs/fotoPrincipal.jpg" alt="Main Photo" />
                </div>
            </div>
            <h2>Backend Developer | React & Angular Proficient</h2>
            <div className={styles.contactButtons}>
                <a href="https://github.com/xXlion370Xx" target='blank'><img src="/imgs/github(64).png" alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/daniel-roa-profile/" target='blank'><img src="/imgs/linkedinNegro(64).png" alt="linkedin icon" /></a>
                <a href="#" target='blank' ><img src="/imgs/gmail(64).png" alt="gmail icon" /></a>
            </div>
        </header>
    )
}
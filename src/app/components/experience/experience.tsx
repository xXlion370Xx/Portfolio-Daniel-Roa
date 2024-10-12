import styles from './experience.module.css'

export default function Experience() {
    return (
        <>
            <h2>Experience</h2>
            <div className={styles.container}>
                <div className={styles.experienceContainer}>
                    <div className={styles.boxExperience}>
                        <h3>Consultor de desarrollo <span>SETI S.A.S</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nobis rem provident beatae cupiditate vel. Quasi nam odit hic culpa, praesentium eius alias quia tempora quas error eligendi iste nostrum.</p>
                    </div>
                    <div className={styles.boxExperience}>
                        <h3>Agente de servicio al cliente bilingüe <span>Teleperformance</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nobis rem provident beatae cupiditate vel. Quasi nam odit hic culpa, praesentium eius alias quia tempora quas error eligendi iste nostrum.</p>
                    </div>
                    <div className={styles.boxExperience}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nobis rem provident beatae cupiditate vel. Quasi nam odit hic culpa, praesentium eius alias quia tempora quas error eligendi iste nostrum.</p>
                    </div>
                    <div className={styles.boxExperience}>
                        <h3>Automatizador de pruebas <span>TCS Tata Consultancy Services</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nobis rem provident beatae cupiditate vel. Quasi nam odit hic culpa, praesentium eius alias quia tempora quas error eligendi iste nostrum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
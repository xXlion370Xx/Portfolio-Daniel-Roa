import styles from './experience.module.css'

export default function Experience() {
    return (
        <>
            <h2>Experience</h2>
            <div className={styles.container}>
                <div className={styles.experienceContainer}>
                    <div className={styles.boxExperience}>
                        <h3 className={styles.h3}>Consultor de desarrollo <strong><span className={styles.companyName}>SETI S.A.S</span></strong></h3>
                        <p>
                            Automatización de la carga de datos en XML y JSON utilizando Python y consumo APIs para integrar información. Desarrollando y manteniendo
                            procedimientos almacenados, jobs, triggers y consultas complejas en SQL Server para optimizar el rendimiento de bases de datos.
                            Implemento procesos ETL con SSIS y desarrollo APIs en C# .NET, estableciendo conexiones
                            con bases de datos y automatizando la carga de datos.
                        </p>
                        <div className={styles.techImagesContainer}>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/pythonLogo.png" alt="Python Logo" />
                                <p>Python</p>
                            </div>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/sqlLogo.png" alt="SQL Logo" />
                                <p>SQL</p>
                            </div>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/sqlServerLogo.png" alt="SQL Server Logo" />
                                <p>SQL Server</p>
                            </div>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/ETLLogo.png" alt="ETL Logo" />
                                <p>ETL SSIS</p>
                            </div>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/dotNetLogo.png" alt=".NET Logo" />
                                <p>.NET Framework</p>
                            </div>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/gitLogo.png" alt="Git Logo" />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxExperience}>
                        <h3 className={styles.h3}>Agente de servicio al cliente bilingüe <strong><span className={styles.companyName}>Teleperformance</span></strong></h3>
                        <p>
                            Atendí peticiones y consultas en inglés para clientes de Citibank, utilizando Excel de forma intermedia para realizar
                            cálculos de intereses y aumentos de crédito. Además, adquirí conocimientos clave sobre el sector financiero.
                        </p>
                        <div className={styles.techImagesContainer}>
                            <div>
                                <img className={styles.techImagesExcel} src="/imgs/excelLogo.png" alt="Excel Logo" />
                                <p>Excel</p>
                            </div>
                            <div>
                                <img className={styles.techImagesIngles} src="/imgs/ingles-logo.png" alt="Ingles Logo" />
                                <p>Ingles B2</p>
                            </div>
                            <div>
                                <img className={styles.techImages} src="/imgs/servicioClienteLogo.webp" alt="Servicio al cliente Logo" />
                                <p>Servicio al cliente</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxExperience}>
                        <h3 className={styles.h3}>Automatizador de pruebas <strong><span className={styles.companyName}>TCS Tata Consultancy Services</span></strong></h3>
                        <p>
                            Automaticé pruebas para el portal de empresas de Davivienda y la app Daviplata utilizando Java, Selenium, y Git.
                            Mejoré el rendimiento de las aplicaciones bajo la metodología Scrum, asegurando calidad y eficiencia en cada sprint.
                        </p>
                        <div className={styles.techImagesContainer}>
                            <div>
                                <img className={styles.techImages} src="/imgs/javalogo.png" alt="Java Logo" />
                                <p>Java</p>
                            </div>
                            <div>
                                <img className={styles.techImages} src="/imgs/gitLogo.png" alt="Git Logo" />
                                <p>Git</p>
                            </div>
                            <div>
                                <img className={styles.techImagesSelenium} src="/imgs/seleniumLogo.png" alt="Selenium Logo" />
                                <p>Selenium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
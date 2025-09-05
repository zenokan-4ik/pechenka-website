import styles from './desktop.module.css'
import data from './data.json'
import cookieicon from '../../pictures/icons/cookie_icon2.svg'

const FooterDesktop = () => {
    return (
        <footer className={styles.wrapper}>
            <img src={cookieicon} alt="Печенька)" />
            <div className={styles.linkswrapper}>

                <div className={styles.linkwrapper}>
                        <p className={styles.linkheader}>{data["social"].text}</p>
                        {
                            data["social"].texts.map((obj, index) => 
                                <p className={styles.link} onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=data["social"].links[index]
                                }}>
                                    {obj}
                                </p>
                            )
                        }
                </div>

                <div className={styles.linkwrapper}>
                        <p className={styles.linkheader}>{data["commishki"].text}</p>
                        {
                            data["commishki"].texts.map((obj, index) => 
                                <p className={styles.link} onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=data["commishki"].links[index]
                                }}>
                                    {obj}
                                </p>
                            )
                        }
                </div>

                <div className={styles.linkwrapper}>
                        <p className={styles.linkheader}>{data["about"].text}</p>
                        {
                            data["about"].texts.map((obj, index) => 
                                <p className={styles.link} onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=data["about"].links[index]
                                }}>
                                    {obj}
                                </p>
                            )
                        }
                </div>

            </div>
            <img src={cookieicon} alt="Печенька)" />
        </footer>
    )
}

export default FooterDesktop
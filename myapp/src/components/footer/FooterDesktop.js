import styles from './desktop.module.css'
import data from './data.json'
import cookieicon from '../../pictures/icons/cookie_icon.svg'

const FooterDesktop = () => {
    return (
        <footer className={styles.wrapper}>
            <img src={cookieicon} alt="Печенька)" />
            <div className={styles.linkswrapper}>
                <div className={styles.linkwrapper}>
                    <p>{data["social"].text}</p>
                </div>
            </div>
            <img src={cookieicon} alt="Печенька)" />
        </footer>
    )
}

export default FooterDesktop
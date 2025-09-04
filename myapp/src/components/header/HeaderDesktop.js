import styles from './desktop.module.css'

import cookieicon from '../../pictures/icons/cookie_icon.svg'

const HeaderDesktop = () => {
    return (
        <header className={styles.wrapper}>
            <img src={cookieicon} alt="Печенька)"/>
            <div className={styles.linkswrapper}>
                <p className={styles.link}>
                    Главная
                </p>
                <p className={styles.link}>
                    Лор
                </p>
                <p className={styles.link}>
                    Коммишки
                </p>
            </div>
            <img src={cookieicon} alt="Печенька)"/>
        </header>
    )
}

export default HeaderDesktop
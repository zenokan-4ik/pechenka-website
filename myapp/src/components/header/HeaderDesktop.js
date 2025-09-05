import styles from './desktop.module.css'
import { navigateToRoute } from '../tools';

import cookieicon from '../../pictures/icons/cookie_icon2.svg'

const HeaderDesktop = () => {
    return (
        <header className={styles.wrapper}>
            <img src={cookieicon} alt="Печенька)" className={styles.cookieicon}/>
            <div className={styles.linkswrapper}>
                <p className={styles.link} onClick={() => {navigateToRoute('/')}}>
                    Главная
                </p>
                <p className={styles.link} onClick={() => {navigateToRoute('/lore')}}>
                    Лор
                </p>
                <p className={styles.link} onClick={() => {navigateToRoute('/commishki')}}>
                    Коммишки
                </p>
            </div>
            <img src={cookieicon} alt="Печенька)" className={styles.cookieicon}/>
        </header>
    )
}

export default HeaderDesktop
import styles from './desktop.module.css'


import cookieicon from '../../pictures/icons/cookie_icon.svg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const HeaderDesktop = () => {
    const navigate = useNavigate()
    return (
        <header className={styles.wrapper}>
            <img src={cookieicon} alt="Печенька)"/>
            <div className={styles.linkswrapper}>
                <p className={styles.link} onClick={() => {navigate('/')}}>
                    Главная
                </p>
                <p className={styles.link} onClick={() => {navigate('/lore')}}>
                    Лор
                </p>
                <p className={styles.link} onClick={() => {navigate('/commishki')}}>
                    Коммишки
                </p>
            </div>
            <img src={cookieicon} alt="Печенька)"/>
        </header>
    )
}

export default HeaderDesktop
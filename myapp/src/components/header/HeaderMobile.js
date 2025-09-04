import styles from './mobile.module.css'

import cookieicon from '../../pictures/icons/cookie_icon.svg'
import burgericon from '../../pictures/icons/burger_icon.svg'

const HeaderMobile = () => {

    return (
        <header className={styles.wrapper}>
            <img src={cookieicon} alt="Печенька)"/>
            
            <img src={burgericon} alt="Меню" style={{marginRight: '4%'}}/>
        </header>
    )
}

export default HeaderMobile
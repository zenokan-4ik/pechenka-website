import styles from './mobile.module.css'
import texts from '../../texts.json'

import art2 from '../../pictures/art2.png'

const LoreMobile = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
                {texts["5"]}
            </p>
            <img src={art2} alt="Артик" className={styles.art}/>
            <p className={styles.author}>{texts["author2"]}</p>
        </div>
    )
}

export default LoreMobile
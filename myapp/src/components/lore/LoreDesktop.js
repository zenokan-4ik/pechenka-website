import styles from './desktop.module.css'

import art2 from '../../pictures/art2.png'

import texts from '../../texts.json'

const LoreDesktop = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockwrapper}>
                <img src={art2} alt="Артик" className={styles.pic} />
                <div className={styles.textwrapper}>
                    <p className={styles.text}>{texts["5"]}</p>
                    <p className={styles.author}>{texts["author2"]}</p>
                </div>
            </div>
        </div>
    )
}

export default LoreDesktop
import styles from './desktop.module.css'

import texts from '../../texts.json'

import sign from '../../pictures/sign.svg'
import art1 from '../../pictures/art1.svg'

const MainDesktop = () => {
    return (
        <div className={styles.wrapper}>
            <div style={{ whiteSpace: 'pre-line', maxWidth: '50%' }}>
                {texts["1"]}
            </div>
            <img src={sign} alt='Подпись' className={styles.sign} />
            <div className={styles.artwrapper}>
                <img src={art1} alt='Артик' className={styles.art} />
                <div className={styles.textwrapper}>
                    <p className={styles.text}>{texts["2"]}</p>
                    <p className={styles.text}>
                        <span style={{color: texts["color3"]}}>
                            {texts["3_color"]}
                        </span>
                        {texts["3"]}
                    </p>
                    <p className={styles.text}>
                        <span style={{color: texts["color4"]}}>
                            {texts["4_color"]}
                        </span>
                        {texts["4"]}
                    </p>
                    <p className={styles.author}>
                        {texts["author1"]}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainDesktop
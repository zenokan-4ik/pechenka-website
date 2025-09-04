import styles from './desktop.module.css'

import texts from '../../texts.json'

import sign from '../../pictures/sign.svg'
import art1 from '../../pictures/art1.svg'
import twitchicon from '../../pictures/icons/twitch.svg'
import boostyicon from '../../pictures/icons/boosty.svg'
import telegramicon from '../../pictures/icons/telegram.svg'
import youtubeicon from '../../pictures/icons/youtube.svg'
import vkicon from '../../pictures/icons/vk.svg'

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
            <p className={styles.header}>
                СОЦИАЛЬНЫЕ СЕТИ
            </p>
            <div className={styles.socialwrapper}>
                <img src={twitchicon} alt='twitch' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.twitch.tv/ultropechenka_'
                }}/>
                <img src={boostyicon} alt='boosty' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://boosty.to/ultropechenka_'
                }}/>
                <img src={telegramicon} alt='telegram' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://t.me/ultropechenkattv'
                }}/>
                <img src={youtubeicon} alt='youtube' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.youtube.com/@ultropechenka'
                }}/>
                <img src={vkicon} alt='vk' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://vk.ru/ultropechenkattv?from=groups'
                }}/>
            </div>
        </div>
    )
}

export default MainDesktop
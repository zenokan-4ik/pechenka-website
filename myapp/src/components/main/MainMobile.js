import styles from './mobile.module.css'
import texts from '../../texts.json'

import sign from '../../pictures/sign.svg'
import art1 from '../../pictures/art1.svg'

import twitchicon from '../../pictures/icons/twitch.svg'
import boostyicon from '../../pictures/icons/boosty.svg'
import telegramicon from '../../pictures/icons/telegram.svg'
import youtubeicon from '../../pictures/icons/youtube.svg'
import vkicon from '../../pictures/icons/vk.svg'

const MainMobile = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
                {texts["1"]}
            </p>
            <img src={sign} alt='Подпись' className={styles.sign} />  

            <div className={styles.artwrapper}>
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
                </div>
                <img src={art1} alt='Артик' className={styles.art} />
                <p className={styles.author}>
                        {texts["author1"]}
                </p>
            </div>  
            <p className={styles.header}>
                СОЦИАЛЬНЫЕ СЕТИ
            </p>
            <div className={styles.social}>
                <img src={twitchicon} alt='twitch' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.twitch.tv/ultropechenka_'
                }}/>
                <img src={boostyicon} alt='boosty' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://boosty.to/ultropechenka_'
                }}
                style={{
                    gridColumnStart: 2,
                    gridRowStart: 2
                }}/>
                <img src={telegramicon} alt='telegram' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://t.me/ultropechenkattv'
                }}
                style={{
                    gridColumnStart: 3,
                    gridRowStart: 1
                }}/>
                <img src={youtubeicon} alt='youtube' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.youtube.com/@ultropechenka'
                }}
                style={{
                    gridColumnStart: 4,
                    gridRowStart: 2
                }}/>
                <img src={vkicon} alt='vk' className={styles.socialicon} onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://vk.ru/ultropechenkattv?from=groups'
                }}
                style={{
                    gridColumnStart: 5,
                    gridRowStart: 1
                }}/>
            </div>
        </div>
    )
}

export default MainMobile
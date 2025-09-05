import styles from './desktop.module.css'
import texts from '../../texts.json'
import { get_html } from '../tools'
import ButtonMobile from '../button/ButtonMobile'

const ComDesktop = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>КОММИШКИ</p>
            {
                ["1", "2", "3", "4", "5", "6"].map((ind) => (
                    <div key={ind} className={styles.textwrapper}>
                        <p className={styles.headertext} style={{color: texts['commikshi'][ind]['header_color']}}>
                            {texts['commikshi'][ind]['header']}
                        </p>
                        <p className={styles.description} >
                            {texts['commikshi'][ind]['description']}
                        </p>
                        {get_html(texts['commikshi'][ind]['text'], styles.text)}
                    </div> 
                ))
            }
            <ButtonMobile 
                text={'Очередь заказов'}
                callback={(e) => {
                    e.preventDefault()
                    window.location.href='https://docs.google.com/spreadsheets/d/1AndsBNF2sHGriUUGLvD1OTtfYfPdMS2nsDiGyn_5GZc/edit?usp=sharing'
                }}
            />
            <ButtonMobile 
                text={'Сделать заказ'}
                callback={(e) => {
                    e.preventDefault()
                    window.location.href='https://t.me/ultropechenkart'
                }}
            />
        </div>
    )
}

export default ComDesktop
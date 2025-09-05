import styles from './desktop.module.css'

const ButtonDesktop = ({text, callback}) => {
    return (
        <div className={styles.wrapper} onClick={(e) => {
            callback(e)
        }}>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ButtonDesktop
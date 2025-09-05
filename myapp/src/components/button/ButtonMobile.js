import styles from './styles.module.css'

const ButtonMobile = ({text, callback}) => {
    return (
        <div className={styles.wrapper} onClick={(e) => {
            callback(e)
        }}>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ButtonMobile
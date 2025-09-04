import styles from './mobile.module.css'

import data from './data.json'

const FooterMobile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.linkswrapper}>
                <div className={styles.linkwrapper}>
                    <p className={styles.linkheader}>{data["commishki"].text}</p>
                    {
                        data["commishki"].texts.map((obj, index) => 
                            <p className={styles.link} onClick={(e) => {
                                e.preventDefault();
                                window.location.href=data["commishki"].links[index]
                            }}>
                                {obj}
                            </p>
                        )
                    }
                </div>

                <div className={styles.linkwrapper}>
                    <p className={styles.linkheader}>{data["about"].text}</p>
                    {
                        data["about"].texts.map((obj, index) => 
                            <p className={styles.link} onClick={(e) => {
                                e.preventDefault();
                                window.location.href=data["about"].links[index]
                            }}>
                                {obj}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FooterMobile
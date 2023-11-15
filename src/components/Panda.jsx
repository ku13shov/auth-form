import styles from './Panda.module.scss';

const Panda = () => {
    return (
        <div className={styles.panda}>
            <div className={styles.ear}></div>
            <div className={styles.face}>
                <div className={styles['eye-shade']}></div>
                <div className={styles['eye-white']}>
                    <div className={styles['eye-ball']}></div>
                </div>
                <div className={`${styles['eye-shade']} ${styles.rgt}`}></div>
                <div className={`${styles['eye-white']} ${styles.rgt}`}>
                    <div className={styles['eye-ball']}></div>
                </div>
                <div className={styles.nose}></div>
                <div className={styles.mouth}></div>
            </div>
            <div className={styles.body}></div>
            <div className={styles.foot}>
                <div className={styles.finger}></div>
            </div>
            <div className={`${styles.foot} ${styles.rgt}`}>
                <div className={styles.finger}></div>
            </div>
        </div>
    );
};

export default Panda;

import { useState } from 'react';
import styles from './Form.module.scss';
import bearImage from '../images/bear.png';

function Form() {
    const [formClasses, setformClasses] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleEmailFocus = () => setformClasses([]);

    const handlePasswordFocus = () => setformClasses(`${styles.up}`);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setformClasses('');

        // "email": "john@mail.com",
        // "password": "changeme"

        const apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setEmail('');
                setPassword('');
                setIsLogin(true);
            } else {
                setformClasses(`${styles['wrong-entry']}`);
            }
        } catch (error) {
            console.error('Error during authentication', error);
        }
    };

    return (
        <form className={formClasses} onSubmit={handleSubmit}>
            <div className={styles.hand}></div>
            <div className={`${styles.hand} ${styles.rgt}`}></div>
            <h1>{isLogin ? 'Welcome, John' : 'Panda Login'}</h1>

            {isLogin ? (
                <img className={styles.greeting} src={bearImage} alt="greetings" />
            ) : (
                <>
                    <div className={styles['form-group']}>
                        <input
                            className={styles['form-control']}
                            type="email"
                            required="required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleEmailFocus}
                        />
                        <label className={styles['form-label']}>Email</label>
                    </div>
                    <div className={styles['form-group']}>
                        <input
                            className={styles['form-control']}
                            type="password"
                            required="required"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={handlePasswordFocus}
                        />
                        <label className={styles['form-label']}>Password</label>
                        <p className={styles.alert}>Invalid Credentials!</p>
                        <button type="submit" className={styles.btn}>
                            Login
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}

export default Form;

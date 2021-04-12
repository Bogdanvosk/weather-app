import React from 'react';
import styles from './details.module.css';

const Details = ({ wind, humidity, direction, pressure, rainProb }) => {
    return (
        <div className={styles.details}>
            <div className={styles.item}>
                <span className={styles.subtitle}>Ветер</span>
                <p className={styles.title}>
                    {Math.round(wind)} м/c, {direction}
                </p>
            </div>
            <div className={styles.item}>
                <span className={styles.subtitle}>Давление</span>
                <p className={styles.title}>
                    {Math.round(pressure)} мм рт. ст.
                </p>
            </div>
            <div className={styles.item}>
                <span className={styles.subtitle}>Влажность</span>
                <p className={styles.title}>{Math.round(humidity)}%</p>
            </div>
            <div className={styles.item}>
                <span className={styles.subtitle}>Вероятность дождя</span>
                <p className={styles.title}>{rainProb}%</p>
            </div>
        </div>
    );
};

export default Details;

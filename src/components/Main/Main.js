import React from 'react';
// import weatherIcon from '../../assets/sun.png';

import styles from './main.module.css';

const Main = ({ temp, descr, icon, scaleType }) => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <img
                    src={icon}
                    className={styles.weatherIcon}
                    alt='Иконка погоды'
                />
                <span className={styles.degrees}>
                    {scaleType === 'cels'
                        ? Math.round(temp)
                        : Math.round(temp * 1.8 + 32)}
                    º
                </span>
            </div>
            <div className={styles.descr}>{descr}</div>
        </div>
    );
};

export default Main;

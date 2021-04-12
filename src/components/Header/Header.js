import { React, useState } from 'react';

import styles from './header.module.css';

const Header = ({
    cityName,
    scaleType,
    updateCityName,
    updateScaleType,
    getWeather,
    handleMyLocation,
}) => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <div className={styles.header}>
            <div
                className={`${styles.search} ${
                    searchActive ? styles.show : ''
                }`}>
                <input
                    type='text'
                    value={cityName}
                    onChange={e => updateCityName(e.target.value)}
                />
                <button
                    type='button'
                    onClick={() => {
                        getWeather();
                        setSearchActive(false);
                    }}>
                    ОК
                </button>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.name}>{cityName}</div>

                <div className={styles.scaleType}>
                    <span className={styles.degree}>º</span>
                    <div className={styles.scaleContainer}>
                        <span
                            onClick={() => updateScaleType('cels')}
                            className={
                                scaleType === 'cels' ? styles.active : ''
                            }>
                            C
                        </span>
                        <span
                            onClick={() => updateScaleType('fahr')}
                            className={
                                scaleType === 'fahr' ? styles.active : ''
                            }>
                            F
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button
                    type='button'
                    className={styles.change}
                    onClick={() => setSearchActive(true)}>
                    Сменить город
                </button>
                <button
                    type='button'
                    className={styles.myGeo}
                    onClick={() => {
                        handleMyLocation();
                        getWeather();
                    }}>
                    Мое местоположение
                </button>
            </div>
        </div>
    );
};

export default Header;

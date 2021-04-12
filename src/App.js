import { React, useState, useEffect } from 'react';

import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import sunIcon from './assets/sun.png';
import stromIcon from './assets/strom.png';
import rainIcon from './assets/rain.png';
import cloudIcon from './assets/cloud.png';
import partlyCloudyIcon from './assets/partly-cloudy.png';

import getWeather from './utils/getWeather';
import getMyLocation from './utils/getMyLocation';
import getCityName from './utils/getCityName';
import getRainProbability from './utils/getRainProbability';

import { usePosition } from 'use-position';

function App() {
    const { latitude: lat, longitude: lon } = usePosition();
    const [scaleType, setScaleType] = useState('cels');
    const [cityName, setCityName] = useState('Лондон');
    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState(0);
    const [direction, setDirection] = useState('');
    const [humidity, setHumidity] = useState(0);
    const [pressure, setPressure] = useState(0);
    const [descr, setDescr] = useState('');
    const [rainProb, setRainProb] = useState(0);
    const [icon, setIcon] = useState('');

    const getRainProb = () => {
        getRainProbability(cityName).then(data => {
            setRainProb(data);
        });
    };

    const handleMyLocation = () => {
        getCityName().then(name => {
            setCityName(name);
        });

        getMyLocation(lat, lon).then(data => {
            const temp = data.current.temp;
            setTemp(temp);

            const wind = data.current.wind_speed;
            setWind(wind);

            const humidity = data.current.humidity;
            setHumidity(humidity);

            const angle = data.current.wind_deg;
            setDirection(getDirection(angle));

            const pressure = data.current.pressure * 0.750063;
            setPressure(pressure);

            const descr = data.current.weather[0].description;
            setDescr(descr);

            handleIcon(descr);
        });
    };

    const updateScaleType = value => {
        setScaleType(value);
    };

    const handleIcon = descr => {
        switch (descr) {
            case 'ясно':
                setIcon(sunIcon);
                break;
            case 'переменная облачность':
                setIcon(partlyCloudyIcon);
                break;
            case 'небольшая облачность':
                setIcon(partlyCloudyIcon);
                break;
            case 'пасмурно':
                setIcon(cloudIcon);
                break;
            case 'сильный дождь':
                setIcon(rainIcon);
                break;
            case 'небольшой дождь':
                setIcon(rainIcon);
                break;
            case 'гроза':
                setIcon(stromIcon);
                break;
            case 'облачно с прояснениями':
                setIcon(partlyCloudyIcon);
                break;
            default:
                break;
        }
    };

    const getDirection = angle => {
        const directions = [
            'северный',
            'северо-западный',
            'западный',
            'юго-западный',
            'южный',
            'юго-восточный',
            'восточный',
            'северо-восточный',
        ];

        return directions[
            Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
        ];
    };

    const updateCityName = value => {
        setCityName(value);
    };

    const getGlobalWeather = () => {
        getWeather(cityName)
            .then(data => {
                const temp = data.main.temp;
                setTemp(temp);

                const wind = data.wind.speed;
                setWind(wind);

                const humidity = data.main.humidity;
                setHumidity(humidity);

                const angle = data.wind.deg;
                setDirection(getDirection(angle));

                const pressure = data.main.pressure * 0.750063;
                setPressure(pressure);

                const descr = data.weather[0].description;
                setDescr(descr);

                handleIcon(descr);
                getRainProb();
            })
            .catch(err => new Error(err));
    };

    useEffect(() => {
        getGlobalWeather();
    }, []);

    return (
        <div className='weather'>
            <Header
                getWeather={getGlobalWeather}
                updateCityName={updateCityName}
                cityName={cityName}
                updateScaleType={updateScaleType}
                scaleType={scaleType}
                handleMyLocation={handleMyLocation}
            />
            <Main temp={temp} descr={descr} icon={icon} scaleType={scaleType} />
            <Details
                wind={wind}
                humidity={humidity}
                direction={direction}
                pressure={pressure}
                rainProb={rainProb}
            />
        </div>
    );
}

export default App;

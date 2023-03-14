import { API_KEY } from '../index.js'

const getMyLocation = async (lat, lon) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`,
    );

    const data = await res.json();

    return data;
};

export default getMyLocation;
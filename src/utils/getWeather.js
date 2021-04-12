const API = 'f4b8f99da3550cdd281064f872e00a90';

const getWeather = async name => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=ru`,
    );

    const dataObj = await res.json();

    return dataObj;
};

export default getWeather;

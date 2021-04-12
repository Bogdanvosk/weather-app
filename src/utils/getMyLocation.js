const API = 'f4b8f99da3550cdd281064f872e00a90';

const getMyLocation = async (lat, lon) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=ru`,
    );

    const data = await res.json();

    return data;
};

export default getMyLocation;
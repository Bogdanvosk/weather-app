const API_KEY = '30a61156e9ab4fcb815bff5272cb6940';

const getRainProbability = async city => {
    const res = await fetch(
        `http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}&lang=ru`,
    );

    const data = await res.json();

    return data.data[0].pop;
};

export default getRainProbability;

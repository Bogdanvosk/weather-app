const getCityName = async () => {
    const res = await fetch(`https://api.2ip.ua/geo.json?ip=`);

    const data = await res.json();

    return data.city_rus;
};

export default getCityName;

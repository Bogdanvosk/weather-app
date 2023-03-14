import { API_KEY } from '../index.js'

const getWeather = async name => {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric&lang=ru`
		)

		const dataObj = await res.json()

		return dataObj
}

export default getWeather

import { API_KEY } from '../index.js'

const getRainProbability = async city => {
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
	)

	const data = await res.json()

	return data.list[0].pop * 100
}

export default getRainProbability

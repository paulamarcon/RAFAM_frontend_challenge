
const getWeather = async () => {

    const url = "https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&timezone=America/Argentina/Buenos_Aires&daily=temperature_2m_max&daily=temperature_2m_min"
    const res = await fetch(url)
    const { daily, timezone } = await res.json()

    const { temperature_2m_max, temperature_2m_min, time } = daily

    return {
        timezone,
        temperature_2m_max,
        temperature_2m_min,
        time
    }
}

export default getWeather
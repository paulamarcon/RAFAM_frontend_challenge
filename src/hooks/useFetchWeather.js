import { useState } from "react"
import { useEffect } from "react"
import getWeather from "../helpers/getWeather"

const useFetchWeather = () => {

    const [temperatureMax, setTemperatureMax] = useState([])
    const [temperatureMin, setTemperatureMin] = useState([])
    const [timezone, setTimezone] = useState("")

    const getWeeklyWeather = async () => {
        const { timezone, temperature_2m_max, temperature_2m_min } = await getWeather()
        setTemperatureMax(temperature_2m_max)
        setTemperatureMin(temperature_2m_min)
        setTimezone(timezone)
    }

    useEffect(() => {
        getWeeklyWeather()
    }, [])

    return {
        timezone,
        temperatureMax,
        temperatureMin
    }
}

export default useFetchWeather
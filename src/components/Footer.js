import useFetchWeather from "../hooks/useFetchWeather"

const Footer = () => {

    const { timezone, temperatureMax, temperatureMin, days } = useFetchWeather()

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", background: "#EEEEF1" }}>
            <div style={{ float: "left", background: "#EEEEF1", fontWeight: "bold", fontSize: "16px" }}>
                {timezone.slice(8)}
            </div>
            <div style={{ background: "#EEEEF1" }}>
                <div className="footerColumn">
                    <p className="footerColumnsTitle">Próximos días</p>
                    <ul style={{ background: "#EEEEF1" }}>
                        {days.map(day => (
                            <li style={{ background: "#EEEEF1" }}>{day.slice(5)}</li>
                        ))}
                    </ul>
                </div>
                <div className="footerColumn">
                    <p className="footerColumnsTitle">Temperaturas máximas</p>
                    <ul style={{ background: "#EEEEF1" }}>
                        {temperatureMax.map(temperature => (
                            <li style={{ background: "#EEEEF1" }}>{temperature} °C</li>
                        ))}
                    </ul>
                </div>
                <div className="footerColumn">
                    <p className="footerColumnsTitle">Temperaturas mínimas</p>
                    <ul style={{ background: "#EEEEF1" }}>
                        {temperatureMin.map(temperature => (
                            <li style={{ background: "#EEEEF1" }}>{temperature} °C</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
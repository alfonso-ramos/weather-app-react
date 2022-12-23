export const WeatherMainInfo = ({ weather }) => {

    console.log(weather?.location.lon)
    console.log(weather?.location.lat)

    return (
        <>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text} />
                </div>
                <div>
                    <div>{weather?.current.condition.text}</div>
                    <div>{weather?.current.temp_c}°</div>
                </div>
            </div>
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339986466!2d${weather?.location.lon}154!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses!2smx!4v1670889501938!5m2!1ses!2smx`}
                // lon -0.24168116748062154
                // lat 51.52855824169555
                width="600"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    )
}

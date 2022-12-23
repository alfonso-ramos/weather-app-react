import { useState, useEffect } from "react"
import { WeatherForm } from "./components/WeatherForm"
import { WeatherMainInfo } from "./components/WeatherMainInfo";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? " "}`
  }, [weather])

  const loadInfo = async (city = 'london') => {
    try {
      const request = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`);

      const data = await request.json()

      setWeather(data)
      console.log(data);

    } catch(error) {

    }

  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city)

  }

  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>
        <WeatherMainInfo weather={weather} />
      </div>
    </>
  )
}

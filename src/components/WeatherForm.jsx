import { useState } from "react"


export const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

    const onChange = (event) => {
        const value = event.target.value;
        if(value !== ''){
            setCity(value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onChangeCity(city)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={onChange}/>
        </form>
    )
}

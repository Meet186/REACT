import {
    FETCH_CITY,
    FETCH_CURRENT_SUCESS,
    FETCH_WEATHER_ERROR,
    FETCH_WEATHER_PENDING,
    FETCH_FORECAST_SUCESS
} from "../Constants/weatherConstant"
import axios from "axios";
const API_key = import.meta.env.VITE_API_KEY;
export const fetchWeatherPending = () => {
    return {
        type: FETCH_WEATHER_PENDING,
    }
}
export const fetchCurrentSucess = (data) => {
    return {
        type: FETCH_CURRENT_SUCESS,
        payload: data,
    }
}
export const fetchForecastSucess = (data) => {
    return {
        type: FETCH_FORECAST_SUCESS,
        payload: data,
    }
}
export const fetchCity = (city) => {
    return {
        type: FETCH_CITY,
        payload: city,
    }
}
export const fetchWeatherError = (error) => {
    return {
        type: FETCH_WEATHER_ERROR,
        payload: error,
    }
}
export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch(fetchWeatherPending())
        try {
            const currentWeatherDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
            const forecastDetails = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${API_key}`)
            dispatch(fetchCurrentSucess(currentWeatherDetails.data))
            dispatch(fetchForecastSucess(forecastDetails.data.list))
        } catch (error) {
            dispatch(fetchWeatherError("something went wrong : " + error))
        }

    }
}

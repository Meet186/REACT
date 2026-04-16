import {
    FETCH_CITY,
    FETCH_CURRENT_SUCESS,
    FETCH_WEATHER_ERROR,
    FETCH_WEATHER_PENDING,
    FETCH_FORECAST_SUCESS
} from "../Constants/weatherConstant"
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
export const fetchWeather = ()=>{
    
}

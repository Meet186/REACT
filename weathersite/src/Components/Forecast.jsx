import React from 'react'
import { useSelector } from 'react-redux'
import WeatherLoader from './WeatherLoader';

const Forecast = () => {
    const { forecast, loading, error } = useSelector(state => state.weatherReducer)
    console.log(forecast);

    if (loading) return <WeatherLoader />
    if (error) return <p>{error}</p>
    if (!forecast) return null;
    const dailyForecast = Object.values(
        forecast.reduce((acc, item) => {
            const date = item.dt_txt.split(" ")[0];

            if (!acc[date]) acc[date] = [];
            acc[date].push(item);

            return acc;
        }, {})
    ).slice(0, 6);

    return (
        <div className="card bg-neutral text-neutral-content w-full max-w-5xl mx-auto shadow-xl">
            <div className="card-body">

                <h1 className="font-bold text-3xl text-center mb-6">
                    6 Days Forecast
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {dailyForecast.map((day, idx) => {
                        const item = day[Math.floor(day.length / 2)]; 
                        return (
                            <div
                                key={idx}
                                className="bg-gray-700 rounded-2xl p-5 text-center shadow-md hover:scale-105 transition"
                            >
                                {/* Day */}
                                <h2 className="font-semibold text-lg mb-2">
                                    {new Date(item.dt_txt).toLocaleDateString("en-IN", {
                                        weekday: "short",
                                        day: "numeric",
                                        month: "short",
                                    })}
                                </h2>

                                {/* Temp */}
                                <div className="text-3xl font-bold mb-2">
                                    {Math.round(item?.main?.temp - 273.15)}°C
                                </div>

                                {/* Weather */}
                                <p className="capitalize text-sm opacity-80 mb-2">
                                    {item?.weather?.[0]?.description}
                                </p>

                                {/* Extra */}
                                <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                                    <div className="bg-neutral rounded-lg py-2 flex flex-col items-center">
                                        <span className="opacity-60">Humidity</span>
                                        <span className="font-semibold">💧 {item?.main?.humidity}%</span>
                                    </div>

                                    <div className="bg-neutral rounded-lg py-2 flex flex-col items-center">
                                        <span className="opacity-60">Wind</span>
                                        <span className="font-semibold">🌬️ {item?.wind?.speed} m/s</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

export default Forecast

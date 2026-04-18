import React from 'react'
import { useSelector } from 'react-redux'
import WeatherLoader from './WeatherLoader'
const Currentweather = () => {
    const { current, loading, error } = useSelector(state => state.weatherReducer)

    if (loading) return  <WeatherLoader/>
    if (error) return <p>{error}</p>
    if (!current) return null;

    return (
        <>

            <div className="card bg-neutral text-neutral-content w-96 shadow-xl">
                <div className="card-body items-center text-center gap-3">

                    {/* City */}
                    <h2 className="card-title text-2xl font-bold">
                        {current?.name || "Loading..."}
                    </h2>

                    {/* Temperature */}
                    <div className="text-5xl font-extrabold">
                        {current?.main?.temp
                            ? Math.round(current.main.temp - 273.15)
                            : "--"}°C
                    </div>

                    {/* Weather Description */}
                    <p className="capitalize text-lg opacity-80">
                        {current?.weather?.[0]?.description || "Loading..."}
                    </p>

                    {/* Divider */}
                    <div className="w-full border-t border-neutral-content/20 my-2"></div>

                    {/* Extra Info */}
                    <div className="grid grid-cols-2 gap-4 w-full text-sm">

                        <div className="flex flex-col items-center bg-neutral-focus rounded-lg py-2">
                            <span className="opacity-70">Humidity</span>
                            <span className="font-semibold">
                                {current?.main?.humidity ?? "--"}%
                            </span>
                        </div>

                        <div className="flex flex-col items-center bg-neutral-focus rounded-lg py-2">
                            <span className="opacity-70">Wind</span>
                            <span className="font-semibold">
                                {current?.wind?.speed ?? "--"} m/s
                            </span>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Currentweather

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchWeather } from './actions/weatherActions'
import Search from './Components/Search'
import Currentweather from './Components/Currentweather'
import Forecast from './Components/Forecast'

function App() {
  const dispatch = useDispatch();
  const city = useSelector(state => state.weatherReducer.city);

  useEffect(() => {
    dispatch(fetchWeather(city))
  }, [])
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 gap-6">
        <Search />
        <Currentweather />
        <Forecast/>
      </div>

    </>
  )
}
export default App

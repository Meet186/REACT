import { useDispatch, useSelector } from 'react-redux'
import { fetchCity,fetchWeather} from '../actions/weatherActions';
const Search = () => {
    const dispatch = useDispatch();
    const city = useSelector(state => state.weatherReducer.city);
    console.log(city);
    
    const handleChange = (e)=>{
        dispatch(fetchCity(e.target.value))
    }
   const handleSerchButton = ()=>{
        dispatch(fetchWeather(city))
   }
    return (
        <>
            <div className="join">
                
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                        type="search" 
                        required placeholder="Delhi" 
                        value={city}
                        onChange={handleChange}

                        />
                    </label>
                <button onClick={handleSerchButton} className="btn btn-neutral join-item">Search</button>
                </div>
        </>
    )
}
export default Search

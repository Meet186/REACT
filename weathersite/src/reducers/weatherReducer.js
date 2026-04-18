import { 
    FETCH_CITY,
    FETCH_CURRENT_SUCESS,
    FETCH_WEATHER_ERROR,
    FETCH_WEATHER_PENDING,
    FETCH_FORECAST_SUCESS
 } from "../Constants/weatherConstant"
const initialState = {
    city : 'Delhi',
    current : null,
    forecast : null,
    loading : false,
    error : null,
}
// API -> pending,sucess,error
export const weatherReducer = (state = initialState,action)=>{
        if(action.type === FETCH_WEATHER_PENDING){
            return {...state,loading : true,error : null}
        } else if (action.type === FETCH_CURRENT_SUCESS){
            return {...state,laoding : false,current : action.payload}
        } else if (action.type === FETCH_FORECAST_SUCESS){
            return {...state,loading : false,forecast : action.payload}
        } else if (action.type === FETCH_WEATHER_ERROR){
            return {...state,loading : false,error : action.payload}
        } else if (action.type === FETCH_CITY){
            return {...state,loading : false,city : action.payload}
        } else {
            return state;
        }

}
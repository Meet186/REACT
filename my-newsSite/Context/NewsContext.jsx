import { createContext, useContext, useState } from "react";
const NewsContext = createContext();
import api from "../src/Config/axios";
const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading,setloading] = useState(false);
    const fetchNews = async (url="/everything/?q=india") => {
        setloading(true);
        try {
            const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setloading(false);
            return response.data;
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    }
    const data = {
        news,
        setNews,
        fetchNews,
        loading,
    }
    return (
        <NewsContext.Provider value={data}>
            {children}
        </NewsContext.Provider >
    )
}
const useNewsContext = () => {
    return useContext(NewsContext);
}
export { useNewsContext, NewsContextProvider }
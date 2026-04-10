import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../../Context/NewsContext'
const Category = ({ className }) => {
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]


    const {news,setNews,fetchNews} = useNewsContext();
    const handleClick = async (e)=>{
        const cat = e.target.value;

        const data = await fetchNews(`/everything?q=${cat}`)
        setNews(data.articles)
    }

    return (
        <div className={`${className}`}>
            <Wrapper>
                <div className={`max-w-full  p-x-5 w-fit m-auto flex overflow-x-auto scrollbar-none gap-5 `}>
                    {categories.map((item,idx) => {
                        return (
                            <button value={item} onClick={handleClick} key={idx} className="btn btn-outline btn-primary">{item}</button>
                        )
                    })}
                </div>
            </Wrapper>
        </div>

    )
}

export default Category

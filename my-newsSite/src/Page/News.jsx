import React, { useEffect } from 'react'
import Wrapper from '../Components/Wrapper'
import { useNewsContext } from '../../Context/NewsContext'
import Loader from '../Components/Loader'
const News = ({ className }) => {



    const { news, setNews, fetchNews, loading } = useNewsContext();

    // load data first time
    useEffect(() => {
        (async () => {
            const data = await fetchNews();
            console.log(data);

            setNews(data.articles)
        })()
    }, [])

    if (loading) return <Loader className={'m-auto p-8'} />

    return (
        <Wrapper>
            <div className={`grid grid-cols-4 gap-5 ${className}`}>

                {news.map((newsDetails, idx) => {
                    if (!newsDetails.urlToImage) return null;
                    return (
                        <NewsCard key={idx} details={newsDetails} />
                    )
                })}

            </div>
        </Wrapper>

    )
}

const NewsCard = ({ details }) => {

    return (
        <div className="card bg-base-200 shadow-sm h-full flex flex-col">

            <figure>
                <img
                    className="aspect-video object-contain w-full"
                    src={details?.urlToImage}
                    alt="news"
                />
            </figure>

            <div className="card-body flex flex-col flex-grow">

                <p className="line-clamp-3 flex-grow">
                    {new Date(details.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="card-title line-clamp-2">{details.title}</h2>

                <p className="line-clamp-3 flex-grow">{details.description}</p>

                <div className="card-actions mt-4">
                    <button
                        onClick={() => window.open(details.url)}
                        className="btn btn-primary w-full sm:w-auto"
                    >
                        Read more
                    </button>
                </div>

            </div>
        </div>
    )
}

export default News

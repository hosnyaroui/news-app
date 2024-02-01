import React, { useEffect, useState } from 'react'

const Main = () => {
        const [news, setNews] = useState([]);

useEffect(() => {
getNews();
}, [])


const getNews = async () => {
        const api = await fetch("https://newsapi.org/v2/top-headlines?q=general&apiKey=API_KEY");
        const data = await api.json();
        setNews(data.articles);
console.log(data.articles);
    }

  return (
    <div>
      
    </div>
  )
}

export default Main

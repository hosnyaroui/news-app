import React, { useEffect, useState } from 'react'

const Main = () => {
        const [news, setNews] = useState([]);

useEffect(() => {
getNews();
}, [])


const getNews = async () => {
        const api = await fetch("https://newsapi.org/v2/top-headlines?q=general&apiKey=2d79f42db6694d78a9b08c7e12462bfc");
        const data = await api.json();
        setNews(data.articles);
console.log(data.articles);
    }

  return (
    <div className='news'>
      <div className='row'>
{
  news.map((item) => (
    <div className='col col-lg-4 col-md-6 col-sm-12'>
<div className='card'>
<img src={item.urlToImage} alt="" className='card-img-top' />
<h6 className='card-header'>{item.title}</h6>
<div className='card-body'>
  <p>{item.description}</p>
  <button className='btn btn-success'>
    <a href={item.url}>More</a>
  </button>
</div>
</div>
    </div>
  ))
}

      </div>
    </div>
  )
}

export default Main

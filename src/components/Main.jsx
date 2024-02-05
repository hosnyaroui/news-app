import React, { useEffect, useState } from 'react'

const Main = ({search}) => {
        const [news, setNews] = useState([]);

useEffect(() => {
getNews(search);
}, [search])


const getNews = async (search) => {
        const api = await fetch("https://newsapi.org/v2/top-headlines?q=" + search  + "&apiKey=2d79f42db6694d78a9b08c7e12462bfc");
        const data = await api.json();
        setNews(data.articles);
console.log(data.articles);
    }
const img = "https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg"

const setImage = event => {
  event.target.src = img
}

  return (
    <div className='news'>
      <div className='row'>
{
  news.map((item) => (
    <div className='col col-lg-4 col-md-6 col-sm-12 news-column'>
<div className='card'>

<img src={item.urlToImage} alt="" className='card-img-top' onError={setImage} />
<h6 className='card-header'>{item.title}</h6>
<div className='card-body'>
  <p className='news-text' style={{fontSize: 14}}>{item.description}</p>
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

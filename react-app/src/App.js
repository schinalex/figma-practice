import { useEffect, useState } from "react";
import Card from './components/Card/Card';

const API_LINK =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const API_KEY = "559dcdf2-e86f-4888-b81f-0496f62157f5";

const getMovies = (url, setData) => 
  fetch(url, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
    .then(setData)

const search = (setData)=>(event)=>{
  if(event.key === 'Enter') {
    const searchText = event.target.value
    if(searchText)getMovies(API_URL_SEARCH + event.target.value,setData)
    else getMovies(API_LINK,setData)
  }
}








function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    getMovies(API_LINK, setData)
   
  }, [])

 
  return (
    <>
      <header className="header__content">
        <div className="header__logo">Api Film</div>
        <input type="text" onKeyDown={search(setData)} placeholder="Search film" className="header__search"></input>
      </header>
      <main className="movies">
        {data.items?.map((movie)=> (<Card key={movie.kinopoiskId || movie.filmId} movie={movie}/>))}
        {data.films?.map((movie)=> (<Card key={movie.kinopoiskId || movie.filmId} movie={movie}/>))}
      </main>
      <footer></footer>
    </>

  )
}

export default App

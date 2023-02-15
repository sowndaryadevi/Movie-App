import React from "react"
import './index.css';
import Movielist from './Components/Movielist';
import MovieHead from "./Components/MovieHead";
import AddFavourite from "./Components/AddFavourite";
import RemoveFavourite from "./Components/RemoveFavourite";



function App() {
  const [Data, setData] = React.useState([])
  const [Search, setSearch] = React.useState('')
  const [favourite, setFavourite] = React.useState([])

  const getMovie = async (Search) => {
    const res = await fetch(`http://www.omdbapi.com/?s=${Search}&apikey=9b92d3d9`)
    const data = await res.json()
    data.Search && setData(data.Search)
  }
  console.log(favourite)

  React.useEffect(() => {
    getMovie(Search)
  }, [Search])


  const saveToLocal = (items) => {
    localStorage.setItem("movies", JSON.stringify(items))
  }


  React.useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("movies"))
 
   favs  && setFavourite(favs)
  }, [])


  const addFav = (movie) => {
    const favMovies= [...favourite, movie];
    function removeDuplicates(favMovies) {
      return [...new Set(favMovies)];
    }
    const favmov = removeDuplicates(favMovies)
    setFavourite(favmov)
     saveToLocal(favmov)
  }

  const remFav = (movie) => {
    const newFav = favourite.filter((favourite) => favourite.imdbID
      !== movie.imdbID
    )
    setFavourite(newFav)
    saveToLocal(newFav)
  }

  return (
    <>

      <MovieHead setSearch={setSearch} Search={Search} />
      <div className="App" >
        <Movielist movie={Data} favourite={AddFavourite} onclick={addFav} />
      </div>

  {  favourite.length > 0 ? <h2 >Favourites</h2> : null}
      <div className="App" >
        <Movielist movie={favourite} favourite={RemoveFavourite} onclick={remFav} />
      </div>


    </>
  );
}

export default App;
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Banner from './components/Banner'
import WatchList from './components/WatchList'
import { useEffect, useState } from 'react'
function App() {
  const [watchlist, setWatchlist] =  useState([])

  const handleAddMovie = (movieObj) =>{
    const newMovie= [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newMovie))
    setWatchlist(newMovie);
  }

  const handleRemoveMovie =(movieObj)=>{
    const movieFilter= watchlist.filter((movie)=>{
      return movie.id != movieObj.id;
    })
    localStorage.setItem('moviesApp', JSON.stringify(movieFilter))
    setWatchlist(movieFilter)
  }

    useEffect(()=>{
      const moviesLocalStoraage= localStorage.getItem('moviesApp')
      if(!moviesLocalStoraage){
        return
      }
      setWatchlist(JSON.parse(moviesLocalStoraage))
    },[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={[<Banner />,<Movies handleAddMovie={handleAddMovie} handleRemoveMovie={handleRemoveMovie}  watchlist={watchlist}/>]}   />
      <Route path="/Watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveMovie={handleRemoveMovie}/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

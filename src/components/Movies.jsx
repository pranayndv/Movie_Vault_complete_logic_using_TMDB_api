import React, { useEffect,useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({handleAddMovie,handleRemoveMovie,watchlist}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () =>{
    setPageNo(pageNo + 1);
  }

  const handleBack =()=>{
    if(pageNo == 1)
    setPageNo(pageNo);
    else{
      setPageNo(pageNo-1);
    }
  
  }


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c6f1a53109d131fad4f18ce439921700&language=en-US&page=${pageNo}`)
      .then(response => {
        setMovies(response.data.results);
        // console.log(response.data.results);
        })
        .catch(error => {
          console.error(error);
          })
          }, [pageNo]);

  return (
    <div className="space-x-8 mx-12 flex flex-wrap justify-center">

      {movies.map((movie)=>{
        return <Card  key={movie.id} movie={movie} handleAddMovie={handleAddMovie} handleRemoveMovie={handleRemoveMovie} watchlist={watchlist}/>
      })}
      
      <Pagination pageNo={pageNo} next={handleNext}  prev={handleBack}/>

    </div>
  );
};

export default Movies;

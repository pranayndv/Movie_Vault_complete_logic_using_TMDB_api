import React from "react";

const Card = ({ movie, handleAddMovie, handleRemoveMovie, watchlist }) => {
  const doesContain = (movie) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
  };
  return (
    <div
      className="h-[17rem] w-[12rem]  my-5 rounded-lg shadow-xl bg-cover relative hover:scale-110 duration-500"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      {doesContain(movie) ? (
        <div onClick={() => handleRemoveMovie(movie)} className="right-0 absolute m-2 bg-black/50 rounded-sm  cursor-pointer"> &#10060;</div>
      ) : (
        <div
          onClick={() => handleAddMovie(movie)}
          className="right-0 absolute m-2 bg-black/50 rounded-sm  cursor-pointer"
        >
          &#128525;
        </div>
      )}

      <div className=" bg-black/70 text-white bottom-0 absolute w-full text-center">
        {movie.original_title}
      </div>
    </div>
  );
};

export default Card;

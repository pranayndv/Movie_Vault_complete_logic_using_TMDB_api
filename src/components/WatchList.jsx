import React, { useEffect, useState } from "react";
import genres from "../utiles/Genres";

const WatchList = ({ watchlist, setWatchlist, handleRemoveMovie }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  console.log(watchlist);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const increaseSort = () => {
    const sorted = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchlist([...sorted]);
  };

  const decreaseSort = () => {
    const sorted = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchlist([...sorted]);
  };

  useEffect(() => {
    let temp = watchlist.map((movie) => genres[movie.genre_ids[0]]);
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <div className="flex flex-col justify-center p-4">
      {/* Genre Filter */}
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`px-3 py-1 border-2 border-purple-700 rounded-md w-32 text-center cursor-pointer ${
              currGenre === genre
                ? "bg-purple-700 text-purple-300"
                : "hover:bg-purple-700/20 text-purple-300"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mx-auto my-4 w-full max-w-md">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="w-full h-[3rem]  rounded-full border-4 text-purple-300 p-5 border-purple-700 hover:scale-105 duration-500 bg-transparent outline-none"
          placeholder="Search Movies"
        />
      </div>

      {/* Movie Table */}
      <div className="text-purple-700 border-2 border-purple-700 mx-2 rounded-xl mt-5 overflow-x-auto">
        <table className="w-full text-center min-w-[600px]">
          <thead className="border-b-2 border-purple-700">
            <tr>
              <th>Movie</th>
              <th>Rating</th>
              <th className="flex justify-center items-center gap-2">
                <div onClick={increaseSort}>
                  <i className="fa-solid fa-arrow-up text-purple-700 cursor-pointer"></i>
                </div>
                <span>Popularity</span>
                <div onClick={decreaseSort}>
                  <i className="fa-solid fa-arrow-down text-purple-700 cursor-pointer"></i>
                </div>
              </th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) =>
                currGenre === "All Genres"
                  ? true
                  : genres[movie.genre_ids[0]] === currGenre
              )
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie) => (
                <tr
                  key={movie.id}
                  className="text-center text-purple-300 border-t"
                >
                  <td className="flex justify-center items-center py-2">
                    <div
                      className="h-[12rem] w-[8rem] sm:h-[15rem] sm:w-[10rem] rounded-lg shadow-xl bg-cover relative hover:scale-110 duration-500"
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                      }}
                    >
                      <div className="bg-black/70 text-white bottom-0 absolute w-full text-center">
                        {movie.original_title}
                      </div>
                    </div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genres[movie.genre_ids[0]]}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveMovie(movie)}
                      className="px-3 py-1 border-2 border-purple-700 rounded-md hover:bg-purple-700/20"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;

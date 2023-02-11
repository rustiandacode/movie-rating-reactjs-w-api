import { useState, useEffect } from 'react'
import { getMovieList, searchMovie } from './api/MovieAPI'

export default function MovieList() {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  const PopularMoviesList = () => {
    return popularMovies.map((movie) => {
      return (
        <div
          className="bg-white lg:w-1/4 rounded-xl text-slate-900 font-bold text-xl truncate p-2 mb-5 "
          key={movie.id}
        >
          <img
            className="rounded-t-xl w-full"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="bg-yellow-300 rounded-b-xl py-2 px-4 truncate">
            {movie.title}
          </p>
        </div>
      )
    })
  }

  return (
    <div
      className="container mx-auto text-center px-9
    "
    >
      <h3 className="font-bold text-3xl">Dzeni Movies</h3>
      <div className="mt-7 lg:flex lg:justify-center lg:gap-3">
        <input
          className="mb-3 lg:mb-0 w-full lg:w-2/3 py-2 px-5 rounded-lg text-lg text-slate-800"
          placeholder="Search movie here..."
          type="text"
          onChange={({ target }) => search(target.value)}
        />
        <button className="w-full lg:w-fit rounded-lg text-lg py-2 px-5 bg-sky-500 font-bold">
          Search
        </button>
      </div>
      <div
        className="mt-20 lg:flex flex-wrap lg:gap-5 justify-center
      "
      >
        <PopularMoviesList />
      </div>
    </div>
  )
}

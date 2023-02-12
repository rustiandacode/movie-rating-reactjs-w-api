import { useState, useEffect } from 'react'
import { getMovieList, searchMovie } from '../api/MovieAPI'

export default function PopularMovies(props) {
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
      console.log(popularMovies)
    }
  }

  return (
    <div className="container p-5 mx-auto text-center">
      <div className="px-8">
        <h3 className="font-bold text-3xl">Dzeni Movies</h3>
        <input
          className="mb-3 my-5 lg:mb-0 w-full lg:w-2/3 py-2 px-5 rounded-lg text-lg text-slate-800"
          placeholder="Search movie here..."
          type="text"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="mt-20 flex flex-wrap gap-5 justify-center">
        {popularMovies.map((movie) => {
          return (
            <div
              className="bg-white lg:w-1/5 rounded-xl text-slate-900 font-bold text-xl truncate p-2 mb-5 cursor-pointer"
              key={movie.id}
              onClick={() => props.movieDetail(movie)}
            >
              <img
                className="rounded-t-xl w-full"
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="bg-yellow-300 rounded-b-xl py-2 px-4 truncate text-sm">
                {movie.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

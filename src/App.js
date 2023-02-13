import { useState } from 'react'
import PopularMovies from './component/PopularMovies'
import DetailMovie from './component/DetailMovie'

export default function App() {
  const [movieDetail, setMovieDetail] = useState()
  const [genreDetail, setGenreDetail] = useState()
  return (
    <div>
      {movieDetail === undefined ? (
        <PopularMovies
          movieDetail={(movie) => setMovieDetail(movie)}
          genreDetail={(genres) => setGenreDetail(genres)}
        />
      ) : (
        <DetailMovie movieDetail={movieDetail} genreDetail={genreDetail} />
      )}
    </div>
  )
}

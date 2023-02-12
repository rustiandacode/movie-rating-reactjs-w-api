import { useState } from 'react'
import PopularMovies from './component/PopularMovies'
import DetailMovie from './component/DetailMovie'

export default function App() {
  const [movieDetail, setMovieDetail] = useState()
  return (
    <div>
      {movieDetail === undefined ? (
        <PopularMovies movieDetail={(movie) => setMovieDetail(movie)} />
      ) : (
        <DetailMovie movieDetail={movieDetail} />
      )}
    </div>
  )
}

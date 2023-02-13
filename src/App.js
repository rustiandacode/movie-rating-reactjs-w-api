import { useState } from 'react'
import PopularMovies from './component/PopularMovies'
import DetailMovie from './component/DetailMovie'

export default function App() {
  const [movieDetail, setMovieDetail] = useState()
  const [genres, setGenres] = useState()
  return (
    <div>
      {movieDetail === undefined ? (
        <PopularMovies
          movieDetail={(movie) => setMovieDetail(movie)}
          movieGenres={(genre) => setGenres(genre)}
        />
      ) : (
        <DetailMovie movieDetail={movieDetail} movieGenres={genres} />
      )}
    </div>
  )
}

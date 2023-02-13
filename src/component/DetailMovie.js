export default function DetailMovie(props) {
  const movie = props.movieDetail
  const genres = props.genreDetail
  return (
    <div
      className="container mx-auto text-center  h-92 relative
    "
    >
      <h3>{movie.title}</h3>
      <p>{movie.genre_ids === genres.id ? genres.namme : ''}</p>
      <p>
        {movie.genre_ids.map((id) => {
          return (
            <div>
              <p>{id === genres.id ? genres.name : ''}</p>
            </div>
          )
        })}
      </p>
      {/* <p>{genre.id}</p> */}
    </div>
  )
}

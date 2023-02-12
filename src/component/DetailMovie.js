export default function DetailMovie(props) {
  const movie = props.movieDetail
  return (
    <div
      className="container mx-auto text-center bg-sky-500 p-4
    "
    >
      <h3 className="text-2xl font-bold">{movie.title}</h3>
    </div>
  )
}

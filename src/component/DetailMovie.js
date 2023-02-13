export default function DetailMovie(props) {
  const movie = props.movieDetail
  const genre = props.movieGenres
  console.log(movie)
  return (
    <div
      className="container mx-auto text-center  h-92 relative
    "
    >
      <div className="bg-gradient-to-r from-slate-900 absolute top-0 z-10 w-full h-full rounded-xl"></div>
      <div className="flex justify-between">
        <div className="p-8 z-50 w-1/2">
          <h3 className="font-bold text-2xl text-start">{movie.title}</h3>
          <p className="text-start my-3">{movie.release_date}</p>
          <p className="text-start my-3">{movie.overview}</p>
        </div>
        <img
          className="w-full h-fit lg:w-1/2 rounded-r-xl"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
    </div>
  )
}

import axios from 'axios'

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async (n) => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=${n}&api_key=${apiKey}`,
  )
  return movie.data.results
}

export const getGenre = async () => {
  const genre = await axios.get(
    `${baseUrl}/genre/movie/list?&api_key=${apiKey}&language=en-US`,
  )
  return genre.data
}

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`,
  )
  return search.data
}

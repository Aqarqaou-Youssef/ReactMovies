import axios from "axios";
export async function discoverMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      import.meta.env.VITE_TOKENID
  )
  return response.data
}

export async function discoverSeries() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=" +
      import.meta.env.VITE_TOKENID
  )
  console.log(response.data)
  return response.data
}

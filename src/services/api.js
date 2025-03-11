const API_KEY = "79fcf414579e73039e8cb2e0d9514c77";
const BASE_URL = "https://api.themoviedb.org/3"
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export async function getPopularMovies() {

    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);

    const data = await res.json();
    console.log(data.results)
    return data.results;

}
// getPopularMovies();


export async function getSearchMovies(query) {
    console.log(query);
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    // console.log(data)
    return data.results;
}

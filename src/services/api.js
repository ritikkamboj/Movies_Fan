const API_KEY = "79fcf414579e73039e8cb2e0d9514c77";
const BASE_URL = "https://api.themoviedb.org/3"

export async function getPopularMovies() {

    const res = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}`);

    const data = await res.json();
    console.log(data.results)
    return data.results;

}
// getPopularMovies();


export async function getSearchMovies(query) {
    const res = await fetch(`${BASE_URL}/search/movies?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
}

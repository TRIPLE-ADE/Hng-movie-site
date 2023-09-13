
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getMovieGenres () {
    try {
        const response = await fetch(`${baseUrl}genre/movie/list?api_key=${apiKey}`);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
        return [];
    }

}

async function mapGenresToName () {
    const genres = await getMovieGenres();

    const genresObject = {}
    genres.map(element => {
        genresObject[element.id] = element.name
    });
    return genresObject
}

const MovieGenres = async ({ genre_ids }) => {

    const genresMap = await mapGenresToName()

  return (
    <div className="flex gap-2 text-xs font-bold text-gray-400">
        {genre_ids.map(genre => genresMap[genre]).join(', ')}
    </div>
  )
}

export default MovieGenres
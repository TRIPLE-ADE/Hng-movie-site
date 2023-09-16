import Header from "../components/Header";
import Movie from "../components/Movie";
import { layout } from "../style";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getMovies () { 
    try {
        const response = await fetch(`${baseUrl}discover/movie?api_key=${apiKey}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return [];
    }

}

const page = async () => {
    const movies = await getMovies()
    if (movies.length === 0) {
        return <div>Error fetching movies. Please try again later.</div>;
    }
  return (
    <>
      <Header />
      <div className="bg-black h-20">
      
      </div>
      <section className={`${layout.section}`}>
        <div>
            <h2 className="text-2xl font-bold">Movies</h2>  
        </div>
            
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-20">
          {movies.map((movie) => (
            <Movie {...{ movie }} key={movie.id} />
          ))}
        </div>
      </section>
    </>
  )
}

export default page
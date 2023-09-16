import SideBar from "@/app/components/SideBar";
import Image from "next/image";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getMoviesDetails(id) {
    try {
        const response = await fetch(`${baseUrl}movie/${id}?api_key=${apiKey}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw new Error('Error fetching movie details. Please try again later.');
    }

}

const page = async ({ params : { id }}) => {
    const movieDetails = await getMoviesDetails(id)
    const { title, overview, backdrop_path, release_date, runtime } = movieDetails;
    const localDate = new Date(release_date);
    const utcDate = new Date(localDate.toUTCString());
    if (!movieDetails) {
        return <div>Error fetching movie details. Please try again later.</div>;
    }
  return (
    <div>
        <SideBar />
        <section className="sm:ml-52 p-6">
          <div className="rounded-xl overflow-hidden relative text-center">
            <Image src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title} width={500} height={500} className="w-full h-72 object-cover object-center"/>
            <Image src="/Play.svg" alt="play" width={100} height={100} className="absolute top-0 right-0 left-0 bottom-0 m-auto cursor-pointer"/>
            <p className="text-white font-medium text-center absolute top-48 right-0 left-0 m-auto">Watch Trailer</p>
          </div>
          <div>
            <p data-testid="movie-title">{title}</p>
            <p data-testid="movie-release-date">{utcDate.toString()}</p>
            <p><span data-testid="movie-runtime">{runtime}</span> minutes</p>
            <p data-testid="movie-overview">{overview}</p>
          </div>
        </section>
    </div>
  )
}

export default page
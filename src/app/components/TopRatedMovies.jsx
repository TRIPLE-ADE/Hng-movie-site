import Movie from '@/app/components/Movie';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getStaticProps() {
  const response = await fetch(`${baseUrl}movie/top_rated?api_key=${apiKey}`)
  await new Promise(resolve => setTimeout(resolve, 1000));
  const data = await response.json();
  return data.results; 
}

const TopRated = async () => {
    const TopRatedMovies = await getStaticProps();
    const TopTenRated = TopRatedMovies.slice(0, 10);
  return (
    <div>
        <div className="grid grid-cols-5">
        {TopTenRated.map(movie => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default TopRated
import Movie from '@/app/components/Movie';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getStaticProps() {
  try {
    const response = await fetch(`${baseUrl}movie/top_rated?api_key=${apiKey}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return []; // Return an empty array in case of an error
  }
}

const TopRated = async () => {
  const topRatedMovies = await getStaticProps();

  if (topRatedMovies.length === 0) {
    return <div>Error fetching top-rated movies. Please try again later.</div>;
  }

  const topTenRated = topRatedMovies.slice(0, 10);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
        {topTenRated.map((movie) => (
          <Movie {...{ movie }} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;

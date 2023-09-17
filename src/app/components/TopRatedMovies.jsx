import Movie from "@/app/components/Movie";
import { layout } from "../style";
import Link from "next/link";
import Image from "next/image";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getStaticProps() {
  try {
    const response = await fetch(`${baseUrl}movie/top_ratd?api_key=${apiKey}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    // throw new Error('Error fetching top-rated movies. Please try again later.'); 
  }
}

const TopRated = async () => {
  const topRatedMovies = await getStaticProps();

  if (!topRatedMovies) {
    return <div>Error fetching top-rated movies. Please try again later.</div>;
  }

  const topTenRated = topRatedMovies.slice(0, 10);

  return (
    <div className={`${layout.section}`}>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold">Top Rated Movies</h2>
        <Link href="/movies" className="hover:text-gray-500 text-rose-700 flex items-center">
          See more
          <Image src="/Chevron right.svg" width={20} height={20} alt="arrow right icon" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-20">
        {topTenRated.map((movie) => (
          <Movie {...{ movie }} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;

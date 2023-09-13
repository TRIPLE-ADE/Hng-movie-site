import Image from 'next/image'
import style from '@/app/style'
import Loading from '@/app/loading'
import MovieRating from './MovieRating';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getHeroMovieData() {
  try {
    const response = await fetch(`${baseUrl}search/movie?query=john%20wick%203&api_key=${apiKey}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Error fetching random movie data:', error);
    return null;
  }
}

const HeroSection = async () => {
  const heroMovieData = await getHeroMovieData();

  if (!heroMovieData) {
    return <Loading />; // Add a loading indicator
  }

const { title, backdrop_path, overview, popularity } = heroMovieData;

    const backgroundImageStyle = {
        backgroundImage: `url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div>
        <section className={`${style.paddingX} flex flex-col gap-3 items-start justify-center h-screen pt-10`} style={backgroundImageStyle}>
            <h1 className='text-4xl font-bold text-white sm:text-5xl sm:max-w-lg mt-10'>{ title }</h1>
            <div className='flex items-center gap-5 text-white'>
             <MovieRating {...{ popularity }} />
            </div>
            <p className='text-sm font-medium text-white sm:max-w-lg'>{ overview }</p>
            <button className='flex items-center gap-1 p-2 text-xs text-white uppercase bg-rose-700 rounded-md'>
              <Image src='/Play.svg' width={20} height={20} alt='play icon' style={{width: 'auto', height: 'auto'}}/>
              watch trailer
            </button>
        </section>
    </div>
  )
}

export default HeroSection
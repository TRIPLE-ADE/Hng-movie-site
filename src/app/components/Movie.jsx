import Link from "next/link";
import Image from "next/image";
import MovieRating from "./MovieRating";
import MovieGenres from "./MovieGenres";

const Movie = ({ movie }) => {
  const { id, title, poster_path, release_date, popularity, genre_ids } = movie;
  const localDate = new Date(release_date);
  console.log(localDate.toString());

  return (
    <Link key={id} href={`/movies/${id}`}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-xs font-bold text-gray-400">{release_date}</p>
          <p>{title}</p>
          <div className="flex items-center justify-between gap-5">
            <MovieRating {...{ popularity }} />
          </div>
          <MovieGenres {...{ genre_ids }} />
        </div>
      </div>
    </Link>
  );
};

export default Movie;

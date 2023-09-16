import Link from "next/link";
import Image from "next/image";
import MovieRating from "./MovieRating";
import MovieGenres from "./MovieGenres";

const Movie = ({ movie }) => {
  const { id, title, poster_path, release_date, popularity, genre_ids } = movie;

  return (
    <Link key={id} href={`/movies/${id}`} data-testid="movie-card">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width={500}
          height={500}
          data-testid="movie-poster"
        />
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-xs font-bold text-gray-400" data-testid="movie-release-date">{release_date}</p>
          <p data-testid="movie-title">{title}</p>
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

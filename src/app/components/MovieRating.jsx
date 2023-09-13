import Image from 'next/image'

const MovieRating = ( { popularity } ) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Image
          src="/imdb.svg"
          width={20}
          height={20}
          alt="IMDB icon"
          style={{ width: "auto", height: "auto" }}
        />
        <p className="text-xs text-white">
          {Math.floor(Number(popularity))}/100
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/tomato.svg"
          width={20}
          height={20}
          alt="Tomatoes icon"
          style={{ width: "auto", height: "auto" }}
        />
        <p className="text-xs text-white">{Math.floor(Number(popularity))}%</p>
      </div>
    </>
  );
};

export default MovieRating;

const AnimeCard = ({ anime }) => {
	return (
		<div className="rounded-xl overflow-hidden w-48 h-72 my-4 md:mx-4 drop-shadow-sm drop-shadow-black flex flex-col">
			<img
				className="w-full h-55 object-cover"
				src={anime.image}
				alt={anime.name}
			/>
			<div className="bg-sky-600 text-center flex-1 flex flex-col justify-between p-2">
				<h4 className="font-bold text-lg truncate">{anime.name}</h4>
				{anime.genres && (
					<p className="capitalize text-sm break-words line-clamp-2">
						Genres: {anime.genres.map((genre) => genre.name).join(", ")}
					</p>
				)}
			</div>
		</div>
	);
};

export default AnimeCard;

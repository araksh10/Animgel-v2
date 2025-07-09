import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import AnimeCard from "./AnimeCard";
import { GET_ALL_ANIME_QUERY } from "../queries/Query";

const AnimeCardHolder = ({ dataByGenre, allAnime }) => {
	const { data, loading, error } = useQuery(GET_ALL_ANIME_QUERY);

	const [showCard, setShowCard] = useState(10);

	useEffect(() => {
		// Reset count when genre changes
		setShowCard(10);
	}, [dataByGenre, allAnime]);

	// if (loading) return "Loading...";
	if (error) return `Error Message: ${error.message}`;

	// Choose source of anime data
	const animeList =
		dataByGenre && !allAnime ? dataByGenre.genre.animes : data?.animes || [];

	const handleShowMore = () => {
		setShowCard((prev) => prev + 10);
	};

	return (
		<div className="p-2 my-8">
			<h2 className="text-2xl font-extrabold tracking-wide italic m-2">
				Animes
			</h2>
			<div
				className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8
            "
			>
				{animeList.slice(0, showCard).map((anime) => {
					return <AnimeCard key={anime.id} anime={anime} />;
					// console.log(anime);
				})}
				{/* {animeList.slice(0, showCard).map((anime) => (
					<AnimeCard key={anime.id} anime={anime} />
				))} */}
			</div>
			{showCard < animeList.length && (
				<div className="text-center mt-4">
					<button
						onClick={handleShowMore}
						className="px-4 py-2 border-2 border-purple-500 drop-shadow-sm drop-shadow-purple-400 text-white rounded-full hover:bg-purple-800/50 transition"
					>
						Show More
					</button>
				</div>
			)}
			{showCard > animeList.length && animeList.length > 10 && (
				<div className="text-center mt-4">
					<button
						onClick={() => setShowCard(10)}
						className="px-4 py-2 border-2 border-purple-500 drop-shadow-sm drop-shadow-purple-400 text-white rounded-full hover:bg-purple-800/50 transition"
					>
						Show Less
					</button>
				</div>
			)}
		</div>
	);
};

export default AnimeCardHolder;

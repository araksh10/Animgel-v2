import { useQuery } from "@apollo/client";
import AnimeCard from "./AnimeCard";
import { GET_ALL_ANIME_QUERY } from "../queries/Query";

const AnimeCardHolder = () => {
	const { data, loading, error } = useQuery(GET_ALL_ANIME_QUERY);

	if (loading) return "loading animes...";
	if (error) return error.message;
	return (
		<div className="p-2 my-8">
			<h2 className="text-2xl font-extrabold tracking-wide italic m-2">
				Animes
			</h2>
			<div
				className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8
            "
			>
				{data.animes.map((anime) => {
					return <AnimeCard key={anime.id} anime={anime} />;
					// console.log(anime);
				})}
			</div>
		</div>
	);
};

export default AnimeCardHolder;

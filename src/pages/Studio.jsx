import { useQuery } from "@apollo/client";
import { GET_STUDIO_QUERY } from "../queries/Query";
import AnimeCard from "../components/AnimeCard";

const Studio = () => {
	const { data, loading, error } = useQuery(GET_STUDIO_QUERY, {
		variables: { id: "686ec09df8b51c931fb9ccb5" },
	});

	if (loading) return "Loading studio...";
	if (error) return `Error Loading Studio: ${error.message}`;
	return (
		<div>
			<div>
				<h2 className="text-2xl font-extrabold text-center m-2 p-2 bg-sky-800 rounded-full">
					{data?.studio?.name}
				</h2>
			</div>
			<div className="flex justify-around">
				<img
					className="rounded-full w-65 m-4"
					src={data?.studio?.logo}
					alt={data?.studio?.name}
				/>
				<p className="m-2">{data?.studio?.details}</p>
			</div>
			<div>
				<h4 className="text-xl font-bold italic mx-4 my-2">
					Anime by {data?.studio?.name}:
				</h4>
				<section className="flex flex-wrap">
					{data?.studio?.animes?.map((anime) => (
						<AnimeCard key={anime.id} anime={anime} />
					))}
				</section>
			</div>
		</div>
	);
};

export default Studio;

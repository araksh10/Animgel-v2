import { useQuery } from "@apollo/client";
import { GET_STUDIO_QUERY } from "../queries/Query";
import AnimeCard from "../components/AnimeCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchStudio } from "../features/studio/StudioSlice";

const Studio = () => {
	const { studio, isLoading, isError, error } = useSelector(
		(state) => state.studio
	);
	const dispatch = useDispatch();
	const { studioId } = useParams();

	useEffect(() => {
		dispatch(fetchStudio(studioId));
	}, [dispatch, studioId]);

	// const { data, loading, error } = useQuery(GET_STUDIO_QUERY, {
	// 	variables: { id: "686ec09df8b51c931fb9ccb5" },
	// });

	if (isLoading) return "Loading studio...";
	if (isError) return `Error Loading Studio: ${error.message}`;
	return (
		<div>
			<div>
				<h2 className="text-2xl font-extrabold text-center mx-20 my-2 p-2 bg-sky-800 rounded-full">
					{studio?.name}
				</h2>
			</div>
			<div className="flex justify-around">
				<img
					className="rounded-full w-35 h-35 m-4"
					src={studio?.logo}
					alt={studio?.name}
				/>
				<p className="m-4 text-justify">{studio?.details}</p>
			</div>
			<div>
				<h4 className="text-xl font-bold italic mx-4 my-2">
					Anime by {studio?.name}:
				</h4>
				<section className="flex flex-wrap mx-4">
					{studio?.animes?.map((anime) => (
						<AnimeCard key={anime.id} anime={anime} />
					))}
				</section>
			</div>
		</div>
	);
};

export default Studio;

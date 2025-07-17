import { useLazyQuery } from "@apollo/client";
import { GET_STUDIO_QUERY } from "../queries/Query";
import { useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../features/anime/AnimeSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const Anime = () => {
	const { anime, isLoading, isError, error } = useSelector(
		(state) => state.anime
	);
	const dispatch = useDispatch();
	const { animeId } = useParams();

	// Data fetching
	useEffect(() => {
		dispatch(fetchAnime(animeId));
	}, [dispatch, animeId]);

	// Lazy studio query
	const [
		loadStudio,
		{ data: dataStudio, loading: loadingStudio, error: errorStudio },
	] = useLazyQuery(GET_STUDIO_QUERY);

	//  Trigger studio load when anime data arrives
	useEffect(() => {
		const studioId = anime?.studio?.id;

		if (studioId) {
			loadStudio({ variables: { id: studioId } });
		}
	}, [anime, loadStudio]);

	const studio = dataStudio?.studio;

	// YouTube video id extract function
	const extractYouTubeId = (url) => {
		const regExp = /^.*(youtu\.be\/|v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	};

	if (isLoading) return <LoadingSpinner />;
	if (isError) return <p className="text-red-500">Error: {error}</p>;

	return (
		<div className="p-4">
			{/* Anime info */}
			<div className="flex gap-4 mb-6 max-h-[40rem]">
				<div className="flex-1 bg-gradient-to-r from-black to-transparent text-white p-4 rounded-xl overflow-y-auto">
					<h2 className="text-4xl font-extrabold mb-2">{anime?.name}</h2>
					<p className="text-justify">{anime?.description}</p>
				</div>
				<div className="w-fit bg-white rounded-xl overflow-hidden h-fit my-4">
					<img src={anime?.image} alt={anime?.name} className="" />
				</div>
			</div>
			{/* Anime trailer */}
			<div>
				<h2 className="text-2xl font-extrabold italic">Watch Trailer: </h2>
				<div className="my-6">
					{anime?.trailer && anime?.trailer.includes("youtu") ? (
						<iframe
							className="w-full h-[30rem] rounded-xl"
							src={`https://www.youtube.com/embed/${extractYouTubeId(
								anime?.trailer
							)}`}
							height="480"
							width="100%"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) : (
						<video src={anime?.trailer} width="1440" height="680" />
					)}
					{!anime?.trailer && <p>No trailer available.</p>}
				</div>
			</div>

			{/* Studio info */}
			<div className="bg-gray-600 p-4 rounded-xl">
				<div className="">
					<h3 className="text-2xl font-semibold italic mb-2">Produced By:</h3>
					{loadingStudio && <LoadingSpinner />}
					{errorStudio && (
						<p className="text-red-500">
							Error loading studio: {errorStudio.message}
						</p>
					)}
					{studio ? (
						<div>
							<Link
								to={`/Studio/${studio.id}`}
								className="flex items-center gap-4"
							>
								<img
									src={studio.logo}
									alt={studio.name}
									className="w-20 h-20 object-cover rounded-full"
								/>
								<h4 className="text-xl font-bold">{studio.name}</h4>
							</Link>
							<div className="mt-4">
								<p>All anime by this studio:</p>
							</div>
							<div className="flex">
								{studio.animes.slice(0, 3).map((anime) => (
									<AnimeCard key={anime.id} anime={anime} />
								))}
							</div>
						</div>
					) : !loadingStudio ? (
						<p>No studio information available.</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Anime;

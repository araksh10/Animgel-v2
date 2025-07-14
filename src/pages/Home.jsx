import { useLazyQuery } from "@apollo/client";
import AnimeCardHolder from "../components/AnimeCardHolder";
import GenreList from "../components/GenreList";
import Hero from "../components/Hero";
import { GET_ALL_ANIME_BY_GENRE_QUERY } from "../queries/Query";
import { useCallback, useState } from "react";

const Home = () => {
	const [allAnime, setAllAnime] = useState(false);
	const [genreName, setGenreName] = useState("");
	const [animesByGenre, { data, loading, error }] = useLazyQuery(
		GET_ALL_ANIME_BY_GENRE_QUERY
	);

	// if (loading) return "Loading ...";
	if (error) return `Error Message: ${error.message}`;

	const handleData = useCallback(
		(genreID, genreName) => {
			if (genreID) {
				setAllAnime(false);
				setGenreName(genreName);
				animesByGenre({ variables: { id: genreID } });
			} else {
				setAllAnime(true);
				setGenreName("");
			}
		},
		[animesByGenre]
	);
	return (
		<div>
			<Hero />
			<AnimeCardHolder
				dataByGenre={data}
				allAnime={allAnime}
				genreName={genreName}
				ifLoading={loading}
			/>
			<GenreList onSettingGenre={handleData} />
		</div>
	);
};

export default Home;

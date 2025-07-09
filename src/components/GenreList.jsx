import { useQuery } from "@apollo/client";
import Button from "./Button";
import { GET_ALL_GENRE_QUERY } from "../queries/Query";

const GenreList = ({ onSettingGenre }) => {
	const { data, loading, error } = useQuery(GET_ALL_GENRE_QUERY);

	if (loading) return "Loading Genres ...";
	if (error) return `Error: ${error.message}`;

	const searchByGenre = (genreID) => {
		onSettingGenre(genreID);
	};

	return (
		<div className="mb-8">
			<h2 className="text-2xl font-extrabold tracking-wide italic m-4">
				Genre List
			</h2>

			<div className="flex flex-wrap justify-center gap-1">
				<Button onClick={() => searchByGenre()} buttName="All Anime" />

				{[...data.genres]
					.sort((a, b) =>
						a.name.toLowerCase().localeCompare(b.name.toLowerCase())
					)
					.map((genre) => (
						<Button
							onClick={() => searchByGenre(genre.id)}
							key={genre.id}
							buttName={genre.name}
						/>
					))}
			</div>
		</div>
	);
};

export default GenreList;

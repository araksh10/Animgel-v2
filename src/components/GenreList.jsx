import Button from "./Button";
import { gql, useQuery } from "@apollo/client";

const getGenreQuery = gql`
	{
		genres {
			id
			name
		}
	}
`;

const GenreList = () => {
	const { data, loading, error } = useQuery(getGenreQuery);

	if (loading) return "Loading Genres ...";
	if (error) return `Error: ${error.message}`;

	const searchByGenre = (genreID) => {
		// onSettingGenre(genreID);
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

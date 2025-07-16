import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSearchResult } from "../features/search/SearchSlice";
import AnimeCard from "../components/AnimeCard";

const SearchResult = () => {
	const { searchKey } = useParams();
	const { searchResult, isLoading, isError, error } = useSelector(
		(state) => state.searchResult
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSearchResult(searchKey));
	}, [dispatch, searchKey]);

	console.log("searchResult:", searchResult);

	return (
		<div className="m-4">
			<div className="bg-sky-600 p-2 m-2 w-fit rounded-s-full">
				<Link to="/">Go to Home</Link>
			</div>
			<div>
				<h2 className="text-2xl font-bold italic">
					Showing results for: {searchKey}
				</h2>
			</div>
			<div className="flex flex-wrap">
				{isLoading && <p>Loading results . . .</p>}
				{isError && !isLoading && (
					<p>
						There is an <span>error</span> occured: {error.message}
					</p>
				)}
				{!isLoading && searchResult?.length === 0 && <p>No results found!</p>}
				{searchResult &&
					!isLoading &&
					searchResult?.map((result) => (
						<AnimeCard key={result.id} anime={result} />
					))}
			</div>
		</div>
	);
};

export default SearchResult;

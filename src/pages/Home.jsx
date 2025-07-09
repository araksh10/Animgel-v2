import AnimeCardHolder from "../components/AnimeCardHolder";
import GenreList from "../components/GenreList";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<div>
			<Hero />
			<AnimeCardHolder />
			<GenreList />
		</div>
	);
};

export default Home;

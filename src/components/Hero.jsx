import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME_QUERY } from "../queries/Query";
import { useEffect, useState } from "react";

const getRandomFive = (animes) => {
	const shuffled = [...animes].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, 5);
};

const Hero = () => {
	const { data, loading, error } = useQuery(GET_ALL_ANIME_QUERY);
	const [carouselAnimes, setCarouselAnimes] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		if (data?.animes?.length) {
			setCarouselAnimes(getRandomFive(data.animes));
		}
	}, [data]);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % carouselAnimes.length);
				setFade(true);
			}, 500);
		}, 5000);
		return () => clearInterval(interval);
	}, [carouselAnimes]);

	if (loading) return "loading...";
	if (error) return error.message;

	if (carouselAnimes.length === 0) return null;

	const anime = carouselAnimes[currentIndex];

	return (
		<div className="bg-gradient-to-r from-slate-900/90 to-transparent">
			<div
				className={`relative w-full h-[38rem] overflow-hidden mb-4 transition-opacity duration-500 ${
					fade ? "opacity-100" : "opacity-0"
				}`}
			>
				{/* Background Image */}
				<img
					src={anime?.image}
					alt="One Piece"
					className="absolute top-0 right-0 h-full object-cover"
				/>

				{/* Carousel Anime Details */}
				<div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center p-10 gap-6 text-white">
					<h2 className="text-4xl md:text-5xl font-extrabold italic tracking-wide">
						{anime.name}
					</h2>

					<div className="flex gap-6 text-sm md:text-base font-semibold opacity-80">
						<span className="bg-slate-800 px-3 py-1 rounded-full">
							{anime.studio.name}
						</span>
						<span className="bg-slate-800 px-3 py-1 rounded-full">
							{anime.runtime} min
						</span>
						<span className="bg-slate-800 px-3 py-1 rounded-full">
							Ep: {anime.episodes}
						</span>
					</div>

					<p className="max-w-4xl text-sm md:text-base text-justify leading-relaxed z-20 bg-slate-800/70 p-4 rounded-2xl backdrop-blur-sm">
						{anime.description.slice(0, 500)}...
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;

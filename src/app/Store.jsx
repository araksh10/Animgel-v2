import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/anime/AnimeSlice";
import studioReducer from "../features/studio/StudioSlice";
import searchReducer from "../features/search/SearchSlice";

export const store = configureStore({
	reducer: {
		anime: animeReducer,
		studio: studioReducer,
		searchResult: searchReducer,
	},
});

import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/anime/AnimeSlice";

export const store = configureStore({
	reducer: {
		anime: animeReducer,
	},
});

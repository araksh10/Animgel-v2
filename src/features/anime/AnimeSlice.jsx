import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ANIME_QUERY } from "../../queries/Query";
import client from "../../app/ApolloClient";

const initialState = {
	anime: {},
	isLoading: false,
	isError: false,
	error: "",
};

export const fetchAnime = createAsyncThunk("anime/fetchAnime", async (id) => {
	const { data } = await client.query({
		query: GET_ANIME_QUERY,
		variables: { id },
		fetchPolicy: "no-cache",
	});
	return data.anime;
});

const animeSlice = createSlice({
	name: "anime",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAnime.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchAnime.fulfilled, (state, action) => {
				state.isLoading = false;
				state.anime = action.payload;
			})
			.addCase(fetchAnime.rejected, (state, action) => {
				state.isLoading = false;
				state.anime = {};
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default animeSlice.reducer;

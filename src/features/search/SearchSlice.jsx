import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../app/ApolloClient";
import { GET_ANIME_BY_NAME } from "../../queries/Query";

const initialState = {
	searchResult: [],
	isLoading: false,
	isError: false,
	error: "",
};

export const fetchSearchResult = createAsyncThunk(
	"searchResult/fetchSearchResult",
	async (name) => {
		const { data } = await client.query({
			query: GET_ANIME_BY_NAME,
			variables: { name },
			fetchPolicy: "no-cache",
		});
		return data.animeByName;
	}
);

const searchSlice = createSlice({
	name: "searchResult",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSearchResult.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchSearchResult.fulfilled, (state, action) => {
				state.isLoading = false;
				state.searchResult = action.payload;
				console.log("it is working fulfilled ", action.payload);
			})
			.addCase(fetchSearchResult.rejected, (state, action) => {
				state.searchResult = {};
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default searchSlice.reducer;

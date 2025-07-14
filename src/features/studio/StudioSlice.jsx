import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_STUDIO_QUERY } from "../../queries/Query";
import client from "../../app/ApolloClient";

const initialState = {
	studio: {},
	isLoading: false,
	isError: false,
	error: "",
};

export const fetchStudio = createAsyncThunk(
	"studio/fetchStudio",
	async (id) => {
		const { data } = await client.query({
			query: GET_STUDIO_QUERY,
			variables: { id },
			fetchPolicy: "no-cache",
		});
		return data.studio;
	}
);

const studioSlice = createSlice({
	name: "studio",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchStudio.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchStudio.fulfilled, (state, action) => {
				state.isLoading = false;
				state.studio = action.payload;
			})
			.addCase(fetchStudio.rejected, (state, action) => {
				state.isLoading = false;
				state.studio = {};
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default studioSlice.reducer;

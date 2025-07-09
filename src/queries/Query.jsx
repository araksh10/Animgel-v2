import { gql } from "@apollo/client";

const GET_ALL_ANIME_QUERY = gql`
	{
		animes {
			id
			name
			image
			genres {
				id
				name
			}
			studio {
				id
				name
			}
			description
			runtime
			episodes
			trailer
		}
	}
`;

const GET_ALL_ANIME_BY_GENRE_QUERY = gql`
	query animesByGenre($id: ID!) {
		genre(id: $id) {
			id
			name
			animes {
				id
				name
				image
				genres {
					name
				}
			}
		}
	}
`;

const GET_ANIME_QUERY = gql`
	query anime($id: ID!) {
		anime(id: $id) {
			id
			name
			image
			genres {
				id
				name
			}
			studio {
				id
				name
			}
			description
			runtime
			episodes
			trailer
		}
	}
`;

const GET_ALL_GENRE_QUERY = gql`
	{
		genres {
			id
			name
		}
	}
`;

export {
	GET_ALL_ANIME_QUERY,
	GET_ALL_ANIME_BY_GENRE_QUERY,
	GET_ANIME_QUERY,
	GET_ALL_GENRE_QUERY,
};

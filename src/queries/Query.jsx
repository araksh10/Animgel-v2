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

export { GET_ALL_ANIME_QUERY, GET_ANIME_QUERY };

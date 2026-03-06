import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	// uri: "https://animgel-api-v2.onrender.com/graphql",
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

export default client;

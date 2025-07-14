import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://animgel-api-v2.onrender.com/graphql",
	cache: new InMemoryCache(),
});

export default client;

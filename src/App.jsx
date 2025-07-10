import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="bg-sky-950 min-h-svh text-white">
				<Navbar />
				<Home />
				<Footer />
			</div>
		</ApolloProvider>
	);
}

export default App;

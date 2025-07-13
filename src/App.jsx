// importing components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Anime from "./pages/Anime";
import Home from "./pages/Home";
// importing Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// importing React-Router-Dom
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

const client = new ApolloClient({
	uri: "https://animgel-api-v2.onrender.com/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BRouter>
				<div className="bg-sky-950 min-h-svh text-white select-none">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Anime" element={<Anime />} />
					</Routes>
					<Footer />
				</div>
			</BRouter>
		</ApolloProvider>
	);
}

export default App;

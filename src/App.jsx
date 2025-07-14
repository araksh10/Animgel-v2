// importing components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
// importing Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./app/ApolloClient";
// importing React-Router-Dom
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<ApolloProvider client={client}>
			<BRouter>
				<div className="bg-sky-950 min-h-svh text-white select-none">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Anime/:animeId" element={<Anime />} />
						<Route path="/Studio/:studioId" element={<Studio />} />
					</Routes>
					<Footer />
				</div>
			</BRouter>
		</ApolloProvider>
	);
}

export default App;

// importing components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MenuBar from './components/Menubar';

// importing pages
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import SearchResult from "./pages/SearchResult";
import Blog from "./pages/Blog.jsx";
import FanArt from "./pages/FanArt.jsx";
import Merchandise from "./pages/Merchandise.jsx";

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
                    <MenuBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Blog" element={<Blog />} />
						<Route path="/fanart" element={<FanArt />} />
						<Route path="/merch" element={<Merchandise />} />
						<Route path="/Anime/:animeId" element={<Anime />} />
						<Route path="/Studio/:studioId" element={<Studio />} />
						<Route path="/Search/:searchKey" element={<SearchResult />} />
					</Routes>
					<Footer />
				</div>
			</BRouter>
		</ApolloProvider>
	);
}

export default App;

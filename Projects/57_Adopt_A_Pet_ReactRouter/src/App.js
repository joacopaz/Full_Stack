import { useState, useEffect } from "react";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Navigation from "./components/navigation";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
	Navigate,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Outlet />
			</div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/:type" element={<HomePage />} />
				<Route exact path="/:type/:id" element={<PetDetailsPage />} />
				<Route
					exact
					path="/:type/:id/notFound"
					element={<PetDetailsNotFound />}
				/>
				<Route path="/search" element={<SearchPage />} />
			</Routes>
		</Router>
	);
}

export default App;

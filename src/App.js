import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutHome from "./layout/Home.jsx";

import Loader from "./components/Loader.jsx";
const Users = lazy(() => import("./views/Users.jsx"));
const StarWars = lazy(() => import("./views/StarWars.jsx"));

export default function App() {
	return (
		<LayoutHome>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense delayMs={500} fallback={<Loader />}>
							<Users />
						</Suspense>
					}
				/>
				<Route
					path="/starwars"
					element={
						<Suspense delayMs={500} fallback={<Loader />}>
							<StarWars />
						</Suspense>
					}
				/>
			</Routes>
		</LayoutHome>
	);
}

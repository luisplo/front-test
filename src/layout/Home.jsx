import React, { useEffect } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import stars from "../assets/img/stars.png";

export default function Home({ children }) {
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/starwars") {
			document.body.classList.add("bg-image");
			document.body.style.backgroundImage = `url(${stars})`;
		} else {
			document.body.style.backgroundImage = null;
			document.body.classList.remove("bg-image");
		}
	}, [location]);
	return (
		<div className="flex h-screen w-full relative">
			<div className="h-full w-full">
				<div className="mt-5">
					<Header />
				</div>

				{children}
			</div>
		</div>
	);
}

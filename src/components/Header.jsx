import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();
	return (
		<div className="flex justify-center">
			<div className="mb-4">
				<ul
					className="flex flex-wrap -mb-px text-sm font-medium text-center"
					id="myTab"
					data-tabs-toggle="#myTabContent"
					role="tablist"
				>
					<li className="mr-2" role="presentation">
						<Link to="/">
							<button
								className={`inline-block p-4 rounded-t-lg ${
									location.pathname === "/"
										? "text-blue-600 hover:text-blue-600"
										: "border-transparent hover:text-white text-gray-200"
								}`}
								type="button"
								role="tab"
							>
								Users
							</button>
						</Link>
					</li>

					<li className="mr-2" role="presentation">
						<Link to="/starwars">
							<button
								className={`inline-block p-4 rounded-t-lg ${
									location.pathname === "/starwars"
										? "text-yellow-300 hover:text-yellow-400"
										: "border-transparent text-gray-400 hover:text-gray-500"
								}`}
								type="button"
								role="tab"
							>
								Star Wars
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

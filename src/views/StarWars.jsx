import React, { useEffect, useState } from "react";
import { getPeople } from "../api/starWars";
import ModalFilters from "../components/ModalFiltersStarWars";
import ModalViewMore from "../components/ModalViewMoreStarWars";

export default function StartWar() {
	const [users, setUser] = useState([]);
	const [openModalFilters, setOpenModalFilters] = useState(false);
	const [openModalViewMore, setOpenModalViewMore] = useState(false);
	const [userSelected, setUserSelected] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		getPeople(20).then(({ data }) => {
			console.log("data", data);
			setUser(data.results);
		});
	}

	function setUserChange(arg) {
		setUserSelected(arg);
		setOpenModalViewMore(true);
	}

	function filters(arg) {}

	const listItems = users.map((e, index) => (
		<div
			key={index}
			className="w-full max-w-sm bg-transparent rounded-lg border border-yellow-300 shadow-md"
		>
			<div className="grid grid-rows-1 gap-4 py-5">
				<h5 className="text-center mb-1 text-xl font-semibold text-white">
					{e.name}
				</h5>
				<div className="flex mt-4 md:mt-6 justify-center">
					<a
						onClick={() => setUserChange(e)}
						href="#"
						className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200"
					>
						View more
					</a>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<div className="container mx-auto px-4">
				<div className="flex justify-end my-5">
					<div className="flex mt-4 space-x-3 md:mt-6">
						<a
							onClick={() => setOpenModalFilters(true)}
							href="#"
							className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-yellow-300 bg-transparent border-yellow-300 rounded-full border-2 hover:bg-transparent hover:border-yellow-400 hover:text-yellow-400 focus:ring-1 focus:outline-none focus:ring-slate-400"
						>
							Add Filters
						</a>
					</div>
				</div>
				<div className="flex justify-center">
					<img
						className="object-cover h-auto w-3/4"
						src="http://imageshack.com/a/img922/3783/oyvsRd.png"
					/>
				</div>
				<div className="grid grid-cols-5 gap-4">{listItems}</div>
			</div>

			{openModalFilters && (
				<ModalFilters setShowModal={setOpenModalFilters} setFilters={filters} />
			)}
			{openModalViewMore && (
				<ModalViewMore
					setShowModal={setOpenModalViewMore}
					user={userSelected}
				/>
			)}
		</>
	);
}

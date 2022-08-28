import React, { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import ModalFilters from "../components/ModalFilters";
import ModalViewMore from "../components/ModalViewMoreUsers";

export default function Users() {
	const [users, setUser] = useState([]);
	const [openModalFilters, setOpenModalFilters] = useState(false);
	const [openModalViewMore, setOpenModalViewMore] = useState(false);
	const [countWords, setCountWords] = useState([]);
	const [userSelected, setUserSelected] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	function orderNames(arg) {
		return arg.sort((a, b) => {
			let fa = a.name.first.toLowerCase(),
				fb = b.name.first.toLowerCase();
			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
	}

	const filterByAge = (data, age) => {
		return data.filter((e) => e.dob.age > age)[0];
	};

	const countWordsFilter = (word) => {
		let counter = {};
		word
			.toLowerCase()
			.split("")
			.map((e) => {
				if (counter[e] !== undefined) {
					counter[e] = counter[e] + 1;
				} else {
					counter[e] = 1;
				}
			});
		return counter;
	};

	function fetchData() {
		getUsers(20).then(({ data }) => {
			setUser(data.results);
		});
	}

	function setUserChange(arg) {
		setUserSelected(arg);
		setOpenModalViewMore(true);
	}

	function filters(arg) {
		if (arg.filter1) {
			getUsers(10).then(({ data }) => {
				setUser(orderNames(data.results));
			});
		} else if (arg.filter2) {
			getUsers(10).then(({ data }) => {
				setUser([filterByAge(data.results, 60)]);
			});
		} else {
			getUsers(1).then(({ data }) => {
				let word = data.results[0].name.first + data.results[0].name.last;
				setCountWords(countWordsFilter(word));
				setUser(data.results);
			});
		}
	}

	const listItems = users.map((e, index) => (
		<div
			key={index}
			className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
		>
			<div className="flex flex-col items-center py-10">
				<img
					className="mb-3 w-24 h-24 rounded-full shadow-lg"
					src={e.picture.medium}
					alt="Bonnie image"
				/>
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{e.name.first} {e.name.last}
				</h5>
				<span className="text-sm text-gray-500 dark:text-gray-400">
					{e.email}
				</span>
				<span className="text-sm text-gray-500 dark:text-gray-400">
					{e.phone}
				</span>
				<span className="text-sm text-gray-500 dark:text-gray-400">
					{e.dob.age}
				</span>
				<div className="flex mt-4 space-x-3 md:mt-6">
					<a
						onClick={() => setUserChange(e)}
						href="#"
						className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
							className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-slate-400 bg-white border-slate-400 rounded-full border-2 hover:bg-slate-100 focus:ring-1 focus:outline-none focus:ring-slate-400"
						>
							Add Filters
						</a>
					</div>
				</div>
				<div className="grid grid-cols-5 gap-4">{listItems}</div>
			</div>

			<div
				className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${
					(openModalViewMore || openModalFilters) === false ? "hidden" : ""
				}`}
			></div>
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

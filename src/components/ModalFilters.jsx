import React, { useState } from "react";

export default function ModalFilters(props) {
	const [inputValues, setInputValues] = useState({
		filter1: false,
		filter2: false,
		filter3: false,
	});

	function handleChange(event) {
		const { name, checked } = event.target;
		let data = inputValues;
		for (let key in data) {
			if (key !== name) {
				data[key] = false;
			}
		}
		setInputValues({ ...data, [name]: checked });
	}

	function onSubmit() {
		props.setFilters(inputValues);
		props.setShowModal(false);
	}

	return (
		<div className="fixed inset-0 w-full h-full z-10">
			<div
				className="mx-auto mb-auto p-5 border w-2/5  shadow-lg rounded-md bg-white"
				style={{ marginTop: "10%" }}
			>
				{/* Modal header  */}
				<div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
						Filtros de búsqueda
					</h3>
					<button
						onClick={() => props.setShowModal(false)}
						type="button"
						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="defaultModal"
					>
						<svg
							aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Cerra modal</span>
					</button>
				</div>
				{/* Modal body  */}
				<div className="p-6 space-y-6">
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						Selecciona uno de los filtro de búsqueda para encontrar los usuarios
					</p>
					<form>
						<div className="grid gap-6 mb-6 md:grid-cols-3">
							<div>
								<label className="inline-flex relative items-center cursor-pointer">
									<input
										name="filter1"
										type="checkbox"
										checked={inputValues.filter1}
										onChange={(e) => handleChange(e)}
										className="sr-only peer"
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
									<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
										Fetch & order
									</span>
								</label>
							</div>
							<div>
								<label className="inline-flex relative items-center cursor-pointer">
									<input
										name="filter2"
										type="checkbox"
										checked={inputValues.filter2}
										onChange={(e) => handleChange(e)}
										className="sr-only peer"
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
									<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
										Fetch & find
									</span>
								</label>
							</div>
							<div>
								<label className="inline-flex relative items-center cursor-pointer">
									<input
										name="filter3"
										type="checkbox"
										checked={inputValues.filter3}
										onChange={(e) => handleChange(e)}
										className="sr-only peer"
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
									<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
										Fetch & count
									</span>
								</label>
							</div>
						</div>
					</form>
				</div>
				{/* Modal footer  */}
				<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
					<button
						onClick={() => onSubmit()}
						data-modal-toggle="defaultModal"
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Filtrar
					</button>
					<button
						onClick={() => props.setShowModal(false)}
						data-modal-toggle="defaultModal"
						type="button"
						className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}

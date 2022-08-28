import React, { useState } from "react";

export default function ModalFilters(props) {
	const [countPassengers, setCountPassengers] = useState(null);
	const [terrain, setTerrain] = useState(null);

	function onSubmit() {
		alert(countPassengers);
		props.setShowModal(false);
	}

	return (
		<div className="fixed inset-0 w-full h-full z-10">
			<div
				className="mx-auto mb-auto p-5 border w-2/5 border-transparent shadow-lg rounded-md backdrop-blur-sm bg-white/10"
				style={{ marginTop: "10%" }}
			>
				{/* Modal header  */}
				<div className="flex justify-between items-start p-4 rounded-t border-b">
					<h3 className="text-xl font-semibold text-white ">
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
					<form>
						<div className="grid gap-6 mb-6 md:grid-cols-1">
							<div>
								<label class="block mb-2 text-sm font-medium text-white">
									Cantidad de pasajeros para la nave
								</label>
								<input
									type="number"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="50"
									value={countPassengers}
									onChange={(e) => setCountPassengers(e.target.value)}
								/>
							</div>
							<div>
								<label class="block mb-2 text-sm font-medium text-white">
									Tipo de terreno
								</label>
								<input
									type="text"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="jungle"
									value={terrain}
									onChange={(e) => setTerrain(e.target.value)}
								/>
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
						className="text-white bg-yellow-300 hover:bg-yellow-400  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Filtrar
					</button>
					<button
						onClick={() => props.setShowModal(false)}
						data-modal-toggle="defaultModal"
						type="button"
						className="text-gray-500 bg-white hover:bg-gray-100  focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-500 focus:z-10 "
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}

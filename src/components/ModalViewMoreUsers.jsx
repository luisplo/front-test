import React from "react";
import moment from "moment";

export default function ModalViewMore(props) {
	return (
		<div className="fixed inset-0 w-full h-full z-10 ">
			<div
				className="mx-auto mb-auto p-5 border w-2/5  shadow-lg rounded-md bg-white "
				style={{ marginTop: "1%" }}
			>
				{/* Modal header  */}
				<div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
						Detalles del usuario
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
				<div style={{ overflowY: "hidden", height: "calc(100vh - 15rem)" }}>
					<div className="p-6 space-y-6 overflow-y-auto h-full">
						<div className="flex justify-center">
							<img
								className="mb-3 w-30 h-30 rounded-full shadow-lg"
								src={props.user.picture.large}
							/>
						</div>
						<div className="grid gap-2 mb-6 md:grid-cols-2">
							<label>Nombre Completo: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.name.title}. {props.user.name.first}{" "}
								{props.user.name.last}
							</p>
							<label>Edad: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.dob.age}
							</p>
							<label>Fecha de nacimiento: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{moment(props.user.dob.date).format("MMMM Do YYYY")}
							</p>
							<label>Genero: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.gender}
							</p>
							<label>Teléfono: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.phone}
							</p>
							<label>Correo electrónico: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.email}
							</p>
							<label>País: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.location.country}
							</p>
							<label>Ciudad: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.location.city}
							</p>
							<label>Estado: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.location.state}
							</p>
							<label>Código Postal: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.location.postcode}
							</p>
							<label>Dirección: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{props.user.location.street.number} -{" "}
								{props.user.location.street.name}
							</p>
							<label>Registrado: </label>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{moment(props.user.registered.date).format(
									"MMMM Do YYYY, h:mm:ss a"
								)}
							</p>
						</div>
					</div>
				</div>
				{/* Modal footer  */}
				<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
					<button
						onClick={() => props.setShowModal(false)}
						data-modal-toggle="defaultModal"
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	);
}

import axios from "axios";
const URL = "https://swapi.dev/api/";

function getPeople() {
	return axios.get(`${URL}people/`);
}

function getPeopleID(count) {
	return axios.get(`${URL}people/${count}/`);
}

export { getPeople, getPeopleID };

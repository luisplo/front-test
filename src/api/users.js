import axios from "axios";
const URL = "https://randomuser.me/api/";

function getUsers(count) {
	return axios.get(`${URL}?results=${count}`);
}

export { getUsers };

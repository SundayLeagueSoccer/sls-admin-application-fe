import axios from "axios";
// const BASE_URL = "http://localhost:3500";
const BASE_URL = "https://sunday-soccer-api.up.railway.app/";

export default axios.create({
  baseURL: BASE_URL,
});

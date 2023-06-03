import axios from "axios";

//test local backend api link
// const BASE_URL = "http://localhost:3500";

//railway deprecated api location link. credits expired.
// const BASE_URL = "https://sunday-soccer-api.up.railway.app/";

//Render.come.
// const BASE_URL = "https://sunday-soccer-api.onrender.com/";

// Cyclic.sh
const BASE_URL = "https://rich-ruby-bandicoot-wrap.cyclic.app/";

export default axios.create({
  baseURL: BASE_URL,
});

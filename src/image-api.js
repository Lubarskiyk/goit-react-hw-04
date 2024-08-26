import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

async function fetchImage(topic) {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
}

import axios from "axios"

const api = axios.create({
  baseURL: "https://personal-site-api.onrender.com/api",
})

export default api

import axios from "axios"

const api = axios.create({
  baseURL: "https://json-server-24r6.onrender.com",
})

export default api

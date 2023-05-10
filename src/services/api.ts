import axios from "axios"

const api = axios.create({
  baseURL: "https://json-server-xi-eight.vercel.app/",
})

export default api

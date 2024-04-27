import axios from "axios";

const AxiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5050",
    headers: {
        "Content-Type": "application/json",
    },
});


export default AxiosClient;
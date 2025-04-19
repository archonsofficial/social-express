import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://api.prism2025.tech",
 // This will send cookies in every single request
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
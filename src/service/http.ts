import axios from "axios";
import { getCookie } from "typescript-cookie";

const BASE_URL = "";

export const http = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 45000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

http.interceptors.request.use(async function (config) {
  const { url, params } = config;
  let authInfo = getCookie("Authorization");
  config.headers["Authorization"] = authInfo;
  return config;
});

export default http;

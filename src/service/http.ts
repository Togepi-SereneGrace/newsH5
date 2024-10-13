import axios from "axios";
import { getCookie, setCookie } from "typescript-cookie";
import { getUserToken } from "./articles";

// const BASE_URL = "http://zcms.nbport.com.cn:8088/zcms/api/";
// const BASE_URL = "http://localhost:9091/zcms/api/";
const BASE_URL = `${window.location.origin}/upSpace/zcms/api/`;

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
  if (url?.includes('/token')) {
    return config;
  }
  let authInfo = getCookie("Authorization");
  if (authInfo) {
    config.headers["Authorization"] = authInfo;
  } else {
    const res: any = await getUserToken();
    console.log("token res", res.access_token);
    config.headers["Authorization"] = res.access_token;
    setCookie("Authorization", res.access_token, {expires: Math.floor(Date.now() / 1000) + res.expires_in});
  }
  return config;
});

http.interceptors.response.use(
	(response:any) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code && res.code !== 0) {
			return res;
		} else {
			return res;
		}
	},
	(error:any) => {
		return Promise.reject(error);
	}
);

export default http;

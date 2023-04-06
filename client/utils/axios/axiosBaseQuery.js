import axios from "axios";

import { getEnv } from "../helper";

// Axios header that would be constant across all request
const axiosHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

// Custom base query that rtk query api slice would use
export const axiosBaseQuery =
  ({ baseUrl, prepareHeaders } = {}) =>
  async ({ url, method, data, params }, api) => {
    let headers;

    // Set the axiosHeaders cookie and origin during server side rednering
    if (typeof window === "undefined") {
      headers = {
        ...axiosHeaders,
        Cookie: api.extra?.cookie,
        origin: getEnv("appOrigin"),
      };
    }

    if (prepareHeaders) {
      const customHeaders = prepareHeaders(api);
      headers = {
        ...headers,
        ...customHeaders,
      };
    }

    // Creating an instance of axios that would handle the request
    try {
      const response = await axios({
        url: url.startsWith(getEnv("backendUrl")) ? url : baseUrl + url,
        method,
        data,
        params,
        headers,
        withCredentials: true,
        credentials: "same-origin",
      });

      return { data: response.data };
    } catch (axiosError) {
      return {
        error: axiosError.response?.data,
      };
    }
  };

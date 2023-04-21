import { axiosBaseQuery } from "@/utils/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { getEnv } from "@/utils/helper";

export const taskifyApi = createApi({
  reducerPath: "taskifyApi",
  tagTypes: ["User", "Tasks", "Project"],
  baseQuery: axiosBaseQuery({ baseUrl: `${getEnv("backendUrl")}/api/` }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  keepUnusedDataFor: 180,
  endpoints: (builder) => ({}),
});

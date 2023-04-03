import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { HYDRATE } from "next-redux-wrapper";

export const taskifyApi = createApi({
  reducerPath: "taskifyApi",
  baseQuery: fetchBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  keepUnusedDataFor: 180,
  endpoints: (builder) => ({}),
});

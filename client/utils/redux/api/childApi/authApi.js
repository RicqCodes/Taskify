import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { taskifyApi } from "../taskifyApi";

const authApi = taskifyApi.injectEndpoints({
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8000/api/` }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (formData) => ({
        url: `register`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;

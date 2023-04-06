import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { taskifyApi } from "../taskifyApi";

const authApi = taskifyApi.injectEndpoints({
  name: "authApi",
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (formData) => ({
        url: "register",
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: "login",
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

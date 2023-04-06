import { taskifyApi } from "../taskifyApi";

const userApi = taskifyApi.injectEndpoints({
  name: "userApi",
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "user",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;

export const { getUser } = userApi.endpoints;
console.log(getUser);

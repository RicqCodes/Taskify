import { taskifyApi } from "../taskifyApi";
import { getEnv } from "@/utils/helper";

const securedApi = taskifyApi.injectEndpoints({
  name: "securedApi",
  overrideExisting: true,
  endpoints: (builder) => ({
    getXsrfToken: builder.query({
      query: () => ({
        url: `${getEnv("backendUrl")}/sanctum/csrf-cookie`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetXsrfTokenQuery } = securedApi;

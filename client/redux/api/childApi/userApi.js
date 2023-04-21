import { taskifyApi } from "../taskifyApi";

const userApi = taskifyApi.injectEndpoints({
  name: "userApi",
  tags: ["project"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `user`,
      }),
      providesTags: ["User"],
    }),
    createProject: builder.mutation({
      query: (formData) => ({
        url: "user/create-project",
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["Project"],
    }),
    getProjects: builder.query({
      query: (userId) => ({
        url: `user/${userId}/all-projects`,
        method: "GET",
      }),
      providesTags: ["Project"],
    }),
    getNotStartedProjects: builder.query({
      query: (userId) => ({
        url: `user/${userId}/projects/not-started`,
        method: "GET",
      }),
      providesTags: ["Project"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateProjectMutation,
  useGetProjectsQuery,
  useGetNotStartedProjectsQuery,
} = userApi;

export const { getUser } = userApi.endpoints;
console.log(getUser);

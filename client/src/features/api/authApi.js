import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../authSlice";

const USER_API = "http://localhost:8000/api/v1/user";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include", // Include cookies in requests
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      try {
        const result = await queryFulfilled;
        dispatch(userLoggedIn({ user: result.data.user }));
      } catch (error) {
        console.error("Error during query:", error);
      }
    },
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
export const authApiReducer = authApi.reducer;
export const authApiActions = authApi.endpoints;

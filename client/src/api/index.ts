import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://10.0.2.2:3000",
    credentials: "include",
});

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: () => ({}),
    tagTypes: [],
});

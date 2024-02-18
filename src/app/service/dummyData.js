import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //get all the products (Reading)
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

//rtk will create a hook behind the screen
// use{$GetAllProducts}Query =>This is the how the hook is created.

export const { useGetAllProductsQuery } = productsApi;

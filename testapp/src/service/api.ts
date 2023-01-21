import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { path } from '../constant'

export const Posapi = createApi({
  reducerPath: 'posApi',
  baseQuery: fetchBaseQuery({
    //baseUrl: 'https://sd-pos-api-dev.azurewebsites.net',
    baseUrl: path.BASE_URL,
  }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (str) => encodeURI(str),
    }),
  }),
})

export const { useGetSearchQuery } = Posapi

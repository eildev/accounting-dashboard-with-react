import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const simpleApiSlice = createApi({
    reducerPath: 'simple',
    baseQuery: fetchBaseQuery({ baseUrl: 'www.themealdb.com/api/json/v1/1/search.php' }),
    endpoints: (builder) => ({
        getMeal: builder.query({
            query: () => '?s=Arrabiata'
        }),
    })
})

export const {
    useGetMealQuery,
} = simpleApiSlice;

export default simpleApiSlice;
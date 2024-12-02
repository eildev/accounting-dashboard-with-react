import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dashboardApiSlice = createApi({
    reducerPath: 'dashboard',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => '/main/dashboard/data'
        }),
        getFooter: builder.query({
            query: () => '/dashboard/footer/data'
        })
    })
})

export const { useGetDataQuery, useGetFooterQuery } = dashboardApiSlice;

export default dashboardApiSlice;
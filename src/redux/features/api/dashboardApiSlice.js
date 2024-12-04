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
        }),
        getProfitLoss: builder.query({
            query: () => '/dashboard/profit-loss/data'
        }),
        getCostInOut: builder.query({
            query: () => '/dashboard/costin-and-out/data'
        }),
        getSalesAnalytics: builder.query({
            query: () => '/dashboard/sales-analytics/data'
        }),
    })
})

export const { useGetDataQuery, useGetFooterQuery, useGetProfitLossQuery, useGetCostInOutQuery } = dashboardApiSlice;

export default dashboardApiSlice;
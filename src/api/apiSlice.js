import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com',
    }),
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => ({
                url: "/menu",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "x-zocom": "yum-KwOi5vm2TYNmi8Dd"
                }
            })
        }),
        getMenuById: builder.query({
            query: (id) => ({
                url: `menu/${id}`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "x-zocom": "yum-KwOi5vm2TYNmi8Dd"
                }
            })
        }),
        getOrderByOrderId: builder.query({
            query: (id) => ({
                url: `winter_solstice/orders/${id}`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "x-zocom": "yum-KwOi5vm2TYNmi8Dd"
                }
            })
        }),
        getReceiptsByOrderId: builder.query({
            query: (id) => ({
                url: `receipts/${id}`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "x-zocom": "yum-KwOi5vm2TYNmi8Dd"
                }
            })
        }),
        postOrder: builder.mutation({
            query: (orderData) => ({
                url: `/winter_solstice/orders`,
                method: 'POST',
                body: orderData,
                headers: {
                    "Content-Type": "application/json",
                    "x-zocom": "yum-KwOi5vm2TYNmi8Dd"
                },
            })
        })
    })
});

export const { useGetMenuQuery, useGetMenuByIdQuery, useGetOrderByOrderIdQuery, useGetReceiptsByOrderIdQuery, usePostOrderMutation } = apiSlice;

//yum-KwOi5vm2TYNmi8Dd
//winter_solstice
//id:ak7h
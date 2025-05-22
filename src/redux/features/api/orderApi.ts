import { apiSlice } from "./apiSlice";


export const orderApi  = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url:'/api/orders',
        method:"POST",
        body:orderData
      }),
      
    
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi ;

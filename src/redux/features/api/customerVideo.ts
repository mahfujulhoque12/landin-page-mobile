import { apiSlice } from "./apiSlice";

export interface Video {
  id: number;
  url: string;
  thumbnail: string;
  title: string;

}

export const customerVideo = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomerVideo: builder.query<Video[], void>({
      query: () => `/api/customer-video`,
      
    
    }),
  }),
});

export const { useGetCustomerVideoQuery } = customerVideo;

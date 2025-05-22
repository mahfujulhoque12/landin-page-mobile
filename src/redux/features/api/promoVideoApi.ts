import { apiSlice } from "./apiSlice";

export interface Video {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  des: string;
}

export const promoVideoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPromoVideo: builder.query<Video[], void>({
      query: () => `/api/promo-video`,
      
    
    }),
  }),
});

export const { useGetPromoVideoQuery } = promoVideoApi;

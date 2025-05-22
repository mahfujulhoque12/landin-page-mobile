import { apiSlice } from "./apiSlice";

export interface Banner {
  id: number;
  title: string;
  image: string;
}

export const bannersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query<Banner[], void>({
      query: () => `/api/banners`,
      
    
    }),
  }),
});

export const { useGetBannersQuery } = bannersApi;

import { apiSlice } from "./apiSlice";

export interface Gallery {
  id: number;
  title: string;
  image: string;
  
}

export const promogalleryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGallery: builder.query<Gallery[], void>({
      query: () => `/api/gallery`,
      
    
    }),
  }),
});

export const { useGetGalleryQuery } = promogalleryApi;

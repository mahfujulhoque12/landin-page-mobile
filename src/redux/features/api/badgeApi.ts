import { apiSlice } from "./apiSlice";

export interface Badge {
  id: number;
  title: string;
  image: string;
}

export const badgeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getbadge: builder.query<Badge[], void>({
      query: () => `/api/badge`,
      
    
    }),
  }),
});

export const { useGetbadgeQuery } = badgeApi;

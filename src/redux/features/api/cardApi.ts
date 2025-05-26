import { apiSlice } from "./apiSlice";

export interface Card {
  id: number;
  name: string;
  image: string;
  basePrice: number;
taxRate: number;
}

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => `/api/card`,
    }),
  }),
});

export const { useGetCardsQuery } = cardApi;
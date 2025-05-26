import { apiSlice } from "./apiSlice";

export interface Card {
  id: number;
  name: string;
  image: string;
  basePrice: number;
  taxRate: number;
  size: string;
  color: string;
}

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => `/api/card`,
    }),
  }),
});

export const { useGetCardsQuery } = cardApi;
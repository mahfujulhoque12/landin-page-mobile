import { apiSlice } from "./apiSlice";

export interface specImg {
  id: number;
  title: string;
  image: string;
}

export interface SpecText {
  title: string
  specs: string[]
}


export const specificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpecImage: builder.query<specImg[], void>({
      query: () => `/api/specification`,
      
    
    }),

    getSpecText:builder.query<SpecText,void>({
        query:()=>`api/specification-text`
    })

  }),
});

export const { useGetSpecImageQuery,useGetSpecTextQuery } = specificationApi;

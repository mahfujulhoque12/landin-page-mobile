import { apiSlice } from "./apiSlice";

export interface WhyImg {
  id: number;
  title: string;
  image: string;
}

export interface WhyText {
  title: string
  reasons: string[]
}


export const whyUsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWhyUsImage: builder.query<WhyImg[], void>({
      query: () => `/api/why-us`,
      
    
    }),

    getWhyUsText:builder.query<WhyText,void>({
        query:()=>`api/why-us-text`
    })

  }),
});

export const {useGetWhyUsImageQuery,useGetWhyUsTextQuery } = whyUsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aaignment5-server-production.up.railway.app/',
  }),
  tagTypes: ['comments', 'books'],
  endpoints: () => ({}),
});

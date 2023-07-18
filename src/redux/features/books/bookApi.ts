import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: (data) => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),
      // invalidatesTags: ['Jobs'],
    }),
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    // or
    // singleProduct: builder.query<object, string>({
    //   query: (id) => ({ url: `/product/${id}` }),
    // }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  usePostBookMutation,
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = bookApi;

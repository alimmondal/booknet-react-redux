import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),

    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['books'],
    }),

    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),

    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // invalidatesTags: ['books'],
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
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostCommentMutation,
  useGetCommentQuery,
} = bookApi;

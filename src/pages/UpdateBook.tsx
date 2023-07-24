/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from '@/components/ui/input';
import { useUpdateBookMutation } from '@/redux/features/books/bookApi';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
  publicationDate: string;
  status: boolean;
}
const UpdateBook = () => {
  // const id: any = useParams();
  // const {
  //   data: book,
  //   isLoading,
  //   error,
  // } = useSingleBookQuery(new mongoose.Types.ObjectId(id));
  // console.log(error);

  // const title = book?.data;
  // console.log('update book', title);
  // const { title } = data?.data || {};

  const [updateBook, { isError }] = useUpdateBookMutation();
  console.log(isError);

  const { handleSubmit, register, reset } = useForm<IFormInput>();

  // console.log(isLoading);
  // console.log(isError);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    updateBook(data);
    reset();
  };

  return (
    <div className="flex justify-center items-center overflow-auto p-10 ">
      <form
        className="shadow-lg p-10 flex flex-wrap gap-3 max-w-3xl justify-between border border-gray-300 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl text-primary mb-5">Edit Your Book</h1>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Name
          </label>
          <Input id="title" defaultValue="" {...register('title')} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="author">
            Author
          </label>
          <Input id="author" defaultValue="" {...register('author')} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="genre">
            Genre
          </label>
          <Input defaultValue="" id="genre" {...register('genre')} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="publicationDate">
            Publication Date
          </label>
          <Input
            id="publicationDate"
            defaultValue=""
            {...register('publicationDate')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <Input type="number" id="price" {...register('price', { min: 2 })} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image url
          </label>
          <Input defaultValue="" {...register('image')} />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="status">
            status
          </label>
          <Input id="status" defaultValue="" {...register('status')} />
        </div>

        <div className="flex justify-end items-center w-full mt-3">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;

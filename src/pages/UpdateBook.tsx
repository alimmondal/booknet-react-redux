/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from '@/redux/features/books/bookApi';
import mongoose from 'mongoose';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

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
  const bookId: any = useParams();

  const {
    data: book,
    isLoading,
    error,
  } = useSingleBookQuery(new mongoose.Types.ObjectId(bookId));
  // console.log('bookId', book);

  const { title, author, genre, publicationDate, price, image, status } =
    book?.data || {};

  const [updateBook, { isError }] = useUpdateBookMutation();
  console.log(isError);

  const { handleSubmit, register, reset } = useForm<IFormInput>();

  console.log(isLoading);
  console.log(isError);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log('submit', data);

    const updatedData = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationDate: data.publicationDate,
      price: data.price,
      image: data.image,
      status: data.status,
    };

    updateBook({ id: bookId, data: updatedData });
    toast({
      description: 'Book updated successfully',
    });
    reset();
  };

  return (
    <div className="flex justify-center items-center overflow-auto p-10">
      <form
        className="shadow-lg p-10 flex flex-wrap gap-3 max-w-3xl justify-between border border-gray-300 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl text-primary mb-5">Edit Your Book</h1>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Name
          </label>
          <Input id="title" defaultValue={title} {...register('title')} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="author">
            Author
          </label>
          <Input id="author" defaultValue={author} {...register('author')} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="genre">
            Genre
          </label>
          <Input defaultValue={genre} id="genre" {...register('genre')} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="publicationDate">
            Publication Date
          </label>
          <Input
            id="publicationDate"
            defaultValue={publicationDate}
            {...register('publicationDate')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <Input
            type="number"
            id="price"
            defaultValue={price}
            {...register('price')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image url
          </label>
          <Input defaultValue={image} {...register('image')} />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="status">
            status
          </label>
          <Input id="status" defaultValue={status} {...register('status')} />
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

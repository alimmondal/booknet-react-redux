/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from '@/components/ui/input';
import { usePostBookMutation } from '@/redux/features/books/bookApi';
import { useForm } from 'react-hook-form';

const AddBook = () => {
  //   const navigate = useNavigate();
  //   const { companyName } = useSelector((state) => state.auth.user);
  const [postBook, { isLoading, isError }] = usePostBookMutation();
  const { handleSubmit, register, control, reset } = useForm();

  console.log(isLoading);
  console.log(isError);

  const onSubmit = (data: any) => {
    // console.log(data);
    postBook({ ...data, comments: [] });
    reset();
  };

  return (
    <div className="flex justify-center items-center overflow-auto p-10 ">
      <form
        className="shadow-lg p-10 flex flex-wrap gap-3 max-w-3xl justify-between border border-gray-300 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl text-primary mb-5">Add New Book</h1>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Name
          </label>
          <Input
            type="text"
            id="title"
            placeholder="Name of the new book"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="author">
            Author
          </label>
          <Input
            type="text"
            id="author"
            placeholder="Author of the new book"
            {...register('author')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="genre">
            Genre
          </label>
          <Input
            type="text"
            id="genre"
            placeholder="genre such as fiction..."
            {...register('genre')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="publicationDate">
            Publication Date
          </label>
          <Input
            type="text"
            id="publicationDate"
            placeholder="date...01/03/2023"
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
            placeholder="price"
            {...register('price')}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image url
          </label>
          <Input
            className="border border-gray-200"
            type="text"
            id="image"
            placeholder="provide an image url"
            {...register('image')}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="status">
            status
          </label>
          <Input
            type="text"
            id="status"
            placeholder="status...true/false"
            {...register('status')}
          />
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

export default AddBook;

// Position name
// Company name
// Experience
// Work Level
// Salary Range
// Employment Type
// Location
// Overview
// Responsibilities
// Requirements
// Skills

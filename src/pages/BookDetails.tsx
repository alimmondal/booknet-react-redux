/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BookReview from '@/components/BookReview';
import { Button } from '@/components/ui/button';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from '@/redux/features/books/bookApi';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // const product = data?.find(
  //   (item: { _id: number }) => item._id === Number(id)
  // );
  //! Temporary code ends here

  const { data: book, isLoading, error } = useSingleBookQuery(id);

  const _id = book?._id;
  // console.log(book, 'bookData');

  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  // const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    alert('Sure? Delete!');
    deleteBook(_id);
    navigate('/books');
  };
  return (
    <>
      <div className="flex max-w-7xl px-28 items-center justify-between border-b border-gray-300 py-20">
        <div className="">
          <img src={book?.image} alt="" className="object-cover h-80" />
        </div>
        <div className=" space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Publication Date: {book?.publicationDate}</p>
          <p className="text-xl">Rating: {book?.rating}</p>
          {/* <ul className="space-y-1 text-lg">
            {book?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
          <Button onClick={() => dispatch(addToCart(book))}>Add to cart</Button>
        </div>

        {user.email && (
          <div className="flex  flex-col gap-10">
            <Button onClick={() => navigate(`/update-book/${_id}`)}>
              Edit The book
            </Button>
            <Button
              // onClick={() => {
              //   deleteBook(_id);
              // }}
              onClick={handleDelete}
            >
              Delete The book
            </Button>
          </div>
        )}
      </div>
      <BookReview id={id!} />
    </>
  );
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BookReview from '@/components/BookReview';
import { Button } from '@/components/ui/button';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hook';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

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
  // console.log(product);

  // const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center justify-between border-b border-gray-300 py-20">
        <div className="w-[50%]">
          <img src={book?.image} alt="" className="object-cover h-80" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Publication Date: {book?.publicationDate}</p>
          <p className="text-xl">Rating: {book?.rating}</p>
          <ul className="space-y-1 text-lg">
            {book?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button onClick={() => dispatch(addToCart(book))}>Add to cart</Button>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}

// import { addToCart } from '@/redux/features/cart/cartSlice';
// import { useAppDispatch } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';
// import { toast } from './use-toast';

interface IProps {
  book: IBook;
}

export default function FantasyCard({ book }: IProps) {
  // const dispatch = useAppDispatch();

  // const handleAddBook = (product: IBook) => {
  //   dispatch(addToCart(product));
  //   toast({
  //     description: 'Book Added',
  //   });
  // };
  return (
    <div>
      <div className="rounded-2xl h-[280px] flex flex-col items-start  p-2 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img src={book?.image} alt="product" />
          <h1 className="text-sm font-semibold hover:underline">
            {book?.title}
          </h1>
        </Link>
        <p>Author: {book?.author}</p>
        {/* <p>Genre: {book?.genre}</p> */}
        {/* <p>Publication Date: {book?.publicationDate}</p> */}
        {/* <p className="text-sm"> */}
        {/* Availability: {product?.status ? 'In stock' : 'Out of stock'} */}
        {/* </p> */}
        {/* <p className="text-sm">Price: {book?.price}</p> */}
        {/* <Button variant="default" onClick={() => handleAddBook(book)}>
          Add to cart
        </Button> */}
      </div>
    </div>
  );
}

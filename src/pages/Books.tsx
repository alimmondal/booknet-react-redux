import BookCard from '@/components/BookCard';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { setPriceRange } from '@/redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';

export default function Books() {
  // const [data, setData] = useState<IBook[]>([]);
  // useEffect(() => {
  //   fetch('./data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const { data, isLoading, error } = useGetBooksQuery(undefined);

  console.log(error);
  // console.log(data );
  console.log(isLoading);

  const { status, priceRange } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  //! Dummy Data

  // const status = true;
  // const priceRange = 100;

  //! **

  const handleSlider = (value: number[]) => {
    console.log(value);
    dispatch(setPriceRange(value[0]));
  };

  let booksData;

  if (status) {
    booksData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else if (priceRange > 0) {
    booksData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else {
    booksData = data?.data;
  }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3  mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-40 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            // onClick={() => dispatch(toggleStatus())}
            className="flex items-center space-x-2 mt-3"
          >
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 py-10">
        {booksData?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}

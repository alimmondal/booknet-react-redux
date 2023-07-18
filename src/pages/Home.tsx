import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-28 ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Best Books <br /> of 2023 So Far
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Find your favorite author's livestream
          </p>
          <div className="text-primary mt-20">
            <p>
              Our list features illustrated books, signed books, autographs,
              original art, a manuscript, and a rare facsimile
            </p>
            <p>a manuscript, and a rare facsimile</p>
          </div>
          <Button className="mt-5">
            <Link to="/books">See the List</Link>
          </Button>
        </div>
        <div className="relative -right-14">
          <img
            src="https://m.media-amazon.com/images/I/81yVjgP-fYL._SY425_.jpg"
            alt=""
          />
          {/* <img src={banner} alt="" /> */}
        </div>
      </div>
      <div className="mb-96">
        <div>
          <img
            className="mx-auto"
            src="https://m.media-amazon.com/images/I/91nAWdfQ2YL._SY425_.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of science fiction is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/books">Brows all books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
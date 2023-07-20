import App from '@/App';
import AddBook from '@/pages/AddNew';
import BookDetails from '@/pages/BookDetails';
import Books from '@/pages/Books';
import Checkout from '@/pages/Checkout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import UpdateBook from '@/pages/UpdateBook';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      {
        path: '/update-book/:id',
        element: <UpdateBook />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;

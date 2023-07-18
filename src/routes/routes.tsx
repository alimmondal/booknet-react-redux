import App from '@/App';
import Books from '@/pages/Books';
import Checkout from '@/pages/Checkout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import ProductDetails from '@/pages/BookDetails';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddBook from '@/pages/AddNew';

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
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
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

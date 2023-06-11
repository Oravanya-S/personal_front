import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import NotFound from '../pages/NotFound';
import RedirectIfAuthenticated from '../features/auth/components/RedirectIfAuthenticated';
import Container from '../layouts/Container';
import AdminHomePage from '../pages/AdminHomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Container/>
        ),
        children: [
          {
            path: '/',
            element: <HomePage />
          },
          {
            path: '/admin',
            element: <AdminHomePage />
          },
        ],
        errorElement: <NotFound />,
      }

]);









export default function Router() {
    return <RouterProvider router={router} />;
  }
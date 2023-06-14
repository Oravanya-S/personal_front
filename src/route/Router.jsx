import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import NotFound from '../pages/NotFound';
import Container from '../layouts/Container';
import AdminHomePage from '../pages/AdminHomePage';
import HistoryPage from '../pages/HistoryPage';
import CartPage from '../pages/CartPage';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import Navbar from '../layouts/Navbar';
import { Outlet } from 'react-router-dom';
import RedirectedAdmin from '../features/auth/components/RedirectedAdmin';
import Models from '../pages/Models';
import PaymentPage from '../pages/PaymentPage';
import AddProductPage from '../pages/AddProductPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
          <>
            <Navbar />
            <Outlet />
          </>
        ),
        children: [
          {
            path: '/',
            element: (<RedirectedAdmin>
                        <HomePage />
                    </RedirectedAdmin>)
          },
          {
            path: '/admin/update',
            element: (<ProtectedRoute>
                      <AddProductPage />
                    </ProtectedRoute>)
          },
          {
            path: '/admin',
            element: (<ProtectedRoute>
                      <AdminHomePage /> 
                    </ProtectedRoute>)
          },
          
          {
            path: '/models/:modelId',
            element: <Models />
          },
          {
            path: '/history/:id',
            element: <HistoryPage />
          },
          {
            path: '/carts/:id',
            element: <CartPage />
          },
          {
            path: '/payment/:id',
            element: <PaymentPage />
          },
        ],
        errorElement: <NotFound />,
      }

]);









export default function Router() {
    return <RouterProvider router={router} />;
  }
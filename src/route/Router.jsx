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
            path: '/admin',
            element: (<ProtectedRoute>
                      <AdminHomePage />
                    </ProtectedRoute>)
          },
          {
            path: '/admin/update',
            element: (<ProtectedRoute>
                      <AdminHomePage />
                    </ProtectedRoute>)
          },
          
          {
            path: '/models/:modelId',
            element: <Models />
          },
          {
            path: '/history',
            element: <HistoryPage />
          },
          {
            path: '/cart',
            element: <CartPage />
          },
        ],
        errorElement: <NotFound />,
      }

]);









export default function Router() {
    return <RouterProvider router={router} />;
  }
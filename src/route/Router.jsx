import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound';
import HistoryPage from '../pages/HistoryPage';
import CartPage from '../pages/CartPage';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import Navbar from '../layouts/Navbar';
import { Outlet } from 'react-router-dom';
import RedirectedAdmin from '../features/auth/components/RedirectedAdmin';
import Models from '../pages/Models';
import PaymentPage from '../pages/PaymentPage';
import AddProductPage from '../pages/AddProductPage';
import ProfilePage from '../pages/ProfilePage';
import AddColorPage from '../pages/AddColorPage';
import AddBagtypePage from '../pages/AddBagtypePage';
import OrderPage from '../pages/OrderPage';
import DashboardPage from '../pages/DashboardPage';
import FavoritePage from '../pages/FavoritePage';
import OneProductPage from '../pages/OneProductPage';
import PaymentSuccess from '../pages/PaymentSucces';
import AddColourPage from '../pages/AddColourPage';

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
            path: '/admin/color',
            element: (<ProtectedRoute>
                      <AddColourPage /> 
                    </ProtectedRoute>)
          },
          {
            path: '/admin/colour',
            element: (<ProtectedRoute>
                      <AddColorPage /> 
                    </ProtectedRoute>)
          },
          {
            path: '/admin/dashboard',
            element: (<ProtectedRoute>
                      <DashboardPage /> 
                    </ProtectedRoute>)
          },
          {
            path: '/admin/update',
            element: (<ProtectedRoute>
                      <AddProductPage />
                    </ProtectedRoute>)
          },
          {
            path: '/admin/order',
            element: (<ProtectedRoute>
                      <OrderPage />  
                    </ProtectedRoute>)
          },
          {
            path: '/admin/bagtypes',
            element: (<ProtectedRoute>
                      <AddBagtypePage /> 
                    </ProtectedRoute>)
          },
          {
            path: '/models/:modelId',
            element: (<RedirectedAdmin>
              <Models />
              </RedirectedAdmin>)
          },
          {
            path: '/product/:id/:modelId',
            element: <OneProductPage />
          },
          {
            path: '/orders/:id',
            element: <HistoryPage />
          },
          {
            path: '/wishlist/:id',
            element: <FavoritePage />
          },
          {
            path: '/carts/:id',
            element: <CartPage />
          },
          {
            path: '/payment/:id',
            element: <PaymentPage />
          },
          {
            path: "/success",
            element: <PaymentSuccess />,
          },
          {
            path: '/profile/:id',
            element: <ProfilePage />
          },
        ],
        errorElement: <NotFound />,
      }

]);

export default function Router() {
    return <RouterProvider router={router} />;
  }
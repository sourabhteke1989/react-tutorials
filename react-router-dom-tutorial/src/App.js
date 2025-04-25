// Importing required components and APIs from react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Products from './components/Products';
import ProductDetailPage from './components/ProductDetailPage';

// Defining routes using createBrowserRouter() API
// Nested routes are defined using the "children" property
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <RootLayout />, // Wrapper layout with navigation and outlet
    errorElement: <ErrorPage />, // Generic error page for route errors
    children: [
      { index: true, element: <HomePage /> }, // Index route for HomePage
      { path: 'products', element: <Products /> }, // Products page
      { path: 'products/:productId', element: <ProductDetailPage /> }, // Dynamic route for product details
    ],
  },
]);

function App() {
  // RouterProvider to provide routing context to the app
  return <RouterProvider router={router} />;
}

export default App;

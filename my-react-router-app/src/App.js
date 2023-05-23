import {
  createBrowserRouter,
  // Route,
  // createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/Error'
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage />},
      { path: "products/:productId", element: <ProductDetailPage/>}
    ],
  },
]);

// const router = createBrowserRouter(routeDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

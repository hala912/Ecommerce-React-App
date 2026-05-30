import MainLayout from "../layouts/main_layout/main_layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Product from "../pages/product";
import Login from "../pages/login";
import Register from "../pages/signup";
import Error from "../pages/error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Product />,
        loader: ({ params }) => {
          if (typeof params.prefix !== "string" || !/^[a-z]+$/.test(params.prefix)) {
            throw new Response("Invalid product id", { status: 400 });
          }
          return true;
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const Approuter = () => {
  return <RouterProvider router={router} />;
};

export default Approuter;
